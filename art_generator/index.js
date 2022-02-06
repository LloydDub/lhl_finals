const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

// makes the canvas for our art assets and ctx lets us maniupulate and draw shapes\images.
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

// generates a new layer image
const saveLayer = (_canvas) => {
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("🖌️Image Generated🖌️");
};

// ctx.drawImage(img, x, y, width, height)
const drawLayer = async () => {
  const image = await loadImage("./bigBrain.png");

  ctx.drawImage(image, 200, 400, 400, 400);
  console.log("🎨Art Generator Ran🎨");

  //global canvas
  saveLayer(canvas);
};

drawLayer();
