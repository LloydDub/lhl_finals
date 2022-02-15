const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const {
  width,
  height,
  description,
  baseImageUri,
  startEditionFrom,
  endEditionAt,
  editionSize,
  ramenWeights,
  ramenBowls,
} = require("./input/config");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

let metadataList = [];
let attributesList = [];
let dnaList = [];

const saveImage = (_editionCount) => {
  fs.writeFileSync(
    `./output/${_editionCount}.png`,
    canvas.toBuffer("image/png")
  );
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
};

const drawBackground = () => {
  ctx.fillStyle = genColour();
  ctx.fillRect(0, 0, width, height);
};

//pushes meta data for nft to JSON
const addMetadata = (_dna, _edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    dna: _dna.join(""),
    name: `#${_edition}`,
    description: description,
    image: `${baseImageUri}/${_edition}`,
    edition: _edition,
    dateTime: dateTime,
    attributes: attributesList,
  };
  metadataList.push(tempMetadata);
  attributesList = [];
};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  attributesList.push({
    name: selectedElement.name,
    rarity: selectedElement.rarity,
  });
};

// applies layers randomly to create our editions.
const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer.selectedElement.path}`);
    resolve({ layer: _layer, loadedImage: image });
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

const constructLayerToDna = (_dna = [], _ramenBowls = [], _ramenBowl) => {
  console.log(_dna);
  let ramenBowl = _ramenBowl.toLowerCase();

  let mappedDnaToLayers = _ramenBowls[ramenBowl].layers.map((layer, index) => {
    let selectedElement = layer.elements.find((e) => e.id == _dna[index]);
    return {
      position: layer.position,
      size: layer.size,
      selectedElement: selectedElement,
    };
  });
  return mappedDnaToLayers;
};

const getRamenBowl = (_randNum) => {
  let ramenBowl = "";
  ramenWeights.forEach((ramenWeight) => {
    if (_randNum >= ramenWeight.from && _randNum <= ramenWeight.to) {
      ramenBowl = ramenWeight.value.toLowerCase();
    }
  });
  return ramenBowl;
};

const isDnaUnique = (_DnaList = [], _dna = []) => {
  let foundDna = _DnaList.find((i) => i.join("") === _dna.join(""));
  return foundDna == undefined ? true : false;
};

const createDna = (_ramenBowls, _ramenBowl) => {
  let randNum = [];
  let ramenBowl = _ramenBowl.toLowerCase();

  _ramenBowls[ramenBowl].layers.forEach((layer) => {
    let randElementNum = Math.floor(Math.random() * 100);
    let num = 0;
    layer.elements.forEach((element) => {
      if (randElementNum >= 100 - element.weight) {
        num = element.id;
      }
    });
    randNum.push(num);
  });

  return randNum;
};

const writeMetadata = (_data) => {
  fs.writeFileSync("./output/_metadata.json", _data);
};

const startCreating = async () => {
  //clears metadata every time you run the file
  writeMetadata("");
  // we want to loop over editon create a piece and loo over the layers obect.
  let editionCount = startEditionFrom;

  while (editionCount <= endEditionAt) {
    let randNum = Math.floor(Math.random() * editionSize);
    let ramenBowl = getRamenBowl(randNum);
    console.log(
      "Random number to determine background (ramenWeights): ",
      randNum
    );

    let newDna = createDna(ramenBowls, ramenBowl);

    console.log("Background chosen via ramenWeights: ", ramenBowl);
    console.log(`New DNA: ${newDna}`);
    // everything in if statement will run if dna is not found in dnalist

    if (isDnaUnique(dnaList, newDna)) {
      let results = constructLayerToDna(newDna, ramenBowls, ramenBowl);
      let loadedElements = [];
      // pushing each promise loadedElements PROMISE array
      results.forEach((layer) => {
        loadedElements.push(loadLayerImg(layer));
      });

      // takes in array of promises
      await Promise.all(loadedElements).then((elementArray) => {
        drawBackground();
        elementArray.forEach((element) => {
          drawElement(element);
        });
        signImage(`#${editionCount}/${editionSize}`);
        saveImage(editionCount);
        addMetadata(newDna, editionCount);
        console.log(
          `New DNA is unique. Created edition ${editionCount} with DNA: ${newDna}`
        );
      });
      // Add new DNA (only if unique) to DNA List
      dnaList.push(newDna);
      // only increment counter if DNA is unique else log "DNA Exists" and don't increment
      editionCount++;
    } else {
      console.log("DNA exists");
    }
  }
  console.log("Final DNA List: ", dnaList);
  writeMetadata(JSON.stringify(metadataList));
};

startCreating();
