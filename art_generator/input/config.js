//set width and heinght here
const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;

const rarity = [
  { key: "", val: "original" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "super rare" },
];

const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach(() => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(1),
        fileName: i,
        rarity: addRarity(i),
      };
    });
};
// think about how the layers will be built up and order the layers by that not dir order.
const layer = [
  {
    id: 1,
    name: "Background",
    location: `${dir}/Background/`,
    elements: getElements(`${dir}/Background/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 2,
    name: "Cirlce",
    location: `${dir}/Cirlce/`,
    elements: getElements(`${dir}/Cirlce/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "Triangle",
    location: `${dir}/Trianlge/`,
    elements: getElements(`${dir}/Triangle/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];
