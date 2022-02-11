const fs = require("fs");
const myArgs = process.argv.slice(2);
const { createCanvas, loadImage } = require("canvas");
const { layers, width, height } = require("./input/config");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
// sets the amount to make  via terminal
const editionSize = myArgs.length > 0 ? Number(myArgs[0]) : 1;
let metadataList = [];
let attributesList = [];
let dnaList = [];

const saveImage = (_editionCount) => {
  fs.writeFileSync(`./output/${_editionCount}.png`, canvas.toBuffer("image/png"));
};

const signImage = (_sig) => {
  ctx.fillStyle = "#000000";
  ctx.font = "bold italics 20pt Arial";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(_sig, 20, 20);
};

const genColour = () => {
  let hue = Math.floor(Math.random() * 3600);
  let pastel = `hsl(${hue}, 100%, 85%)`;
  return pastel;
}

const drawBackground = () => {
  ctx.fillStyle = genColour();
  ctx.fillRect(0, 0, width, height);
}



//pushes meta data for nft to JSON
const addMetadata = (_dna, _edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    dna: _dna,
    edition: _edition,
    dateTime: dateTime,
    attributes: attributesList
  };
  metadataList.push(tempMetadata);
  attributesList = [];
};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  attributesList.push({
    name: selectedElement.name,
    rarity: selectedElement.rarity
  })
};

// applies layers randomly to create our editions.
const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer.location}${_layer.selectedElement.fileName}`);
    resolve({layer: _layer, loadedImage: image})
  });
};

const drawElement = (_element) => {
  ctx.drawImage(
    _element.loadedImage,
    _element.layer.position.x,
    _element.layer.position.y,
    _element.layer.size.width,
    _element.layer.size.height
  );
  addAttributes(_element);
};

const constructLayerToDna = (_dna, _layers) => {
  // seperate the DNA number into pairs of 2 into an array
  let dnaSegment = _dna.toString().match(/.{1,2}/g);
  let counter = 0;
  let mappedDnaToLayers = _layers.map((layer) => {
    // select layer.element[index] by using remainder from each two pair/# of elements in the layer
    let selectedElement = layer.elements[dnaSegment[counter] % layer.elements.length]
    counter += 1;
    return {
      location: layer.location,
      position: layer.position,
      size: layer.size,
      selectedElement: selectedElement
    };
  });
  return mappedDnaToLayers;
};

const isDnaUnique = (_DnaList = [], _dna) => {
  let foundDna =  _DnaList.find((i) => i === _dna);
  return foundDna == undefined ? true : false;
};

const createDna = (_len) => {
  let randNum = 0;
  //have to generate a random two number pair for each layer (10 layers = 20 numbers)
  if (_len > 16) {
    let maxChar = 15;
    //if more than 15 character number, BigInt must be used to avoid trailing zeroes
    randNum = BigInt("" + Math.floor(
      Number(`1e${maxChar}`) + Math.random() * Number(`9e${maxChar}`)) + Math.floor(Number(`1e${_len - maxChar - 1}`) + Math.random() * Number(`9e${_len - maxChar - 1}`)));
  } else {
    randNum = Math.floor(
      Number(`1e${_len}`) + Math.random() * Number(`9e${_len}`)) + Math.floor(1000 + Math.random() * 9000);
    console.log(randNum)
  }
  return randNum;
}

const writeMetadata = (_data) => {
  fs.writeFileSync("./output/_metadata.json", _data);
};

// function which allows serilaization of BigInt into metadata if over 8 layers
const stringify = (value) => {
  if (value !== undefined) {
    return JSON.stringify(value, (_, v) => typeof v === 'bigint' ? `${v}n` : v);
  }
};

const startCreating = async () => {
  //clears metadata every time you run the file
  writeMetadata("");
  // we want to loop over editon create a piece and loo over the layers obect.
  let editionCount = 1;

  while(editionCount <= editionSize) {
    let newDna = createDna((layers.length * 2) - 1)
    console.log(`New DNA: ${newDna}`);
    // everything in if statement will run if dna is not found in dnalist
    
    if (isDnaUnique(dnaList, newDna)) {
      
      let results = constructLayerToDna(newDna, layers);
      let loadedElements = [];
      
      // pushing each promise loadedElements PROMISE array
      results.forEach(layer => {
        loadedElements.push(loadLayerImg(layer));
      })
      
      // takes in array of promises
      await Promise.all(loadedElements).then(elementArray => {
        drawBackground();
        elementArray.forEach(element => {
          drawElement(element);
        });
        signImage(`#${editionCount}/4200`);
        saveImage(editionCount);
        addMetadata(newDna, editionCount);
        console.log(`New DNA is unique. Created edition ${editionCount} with DNA: ${newDna}`);
      });
        // Add new DNA (only if unique) to DNA List
      dnaList.push(newDna)
      // only increment counter if DNA is unique else log "DNA Exists" and don't increment
      editionCount++;
    } else {
      console.log("DNA exists")
    }
  }
  console.log("Final DNA List: ", dnaList);
  writeMetadata(stringify(metadataList)); 
};

startCreating();