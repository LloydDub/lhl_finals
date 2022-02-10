const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;

const rarity = [
  { key: "", val: "common" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "epic" },
];

// sets the value based on the key above,
const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
};

//cleans the name by taking in string and slicing .png and checks for the rarity property
const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

//gets file names for assets to build layesr and popultes element array
const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        Rarity: addRarity(i),
      };
    });
};

//think about how your layers are built up!
const layers = [
  {
    id: 1,
    name: "background_3",
    location: `${dir}/background_3/`,
    elements: getElements(`${dir}/background_3/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 2,
    name: "broth_4",
    location: `${dir}/broth_4/`,
    elements: getElements(`${dir}/broth_4/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "noodle_4",
    location: `${dir}/noodle_4/`,
    elements: getElements(`${dir}/noodle_4/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "egg_2",
    location: `${dir}/egg_2/`,
    elements: getElements(`${dir}/egg_2/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 5,
    name: "protein_4",
    location: `${dir}/protein_4/`,
    elements: getElements(`${dir}/protein_4/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 6,
    name: "seaweed_1",
    location: `${dir}/seaweed_1/`,
    elements: getElements(`${dir}/seaweed_1/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];
// console.log("!!!", getElements(`${dir}/bottom lid/`));
module.exports = { layers, width, height };
