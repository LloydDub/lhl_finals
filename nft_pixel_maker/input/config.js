const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "Test Minting";
const baseImageUri = "";
const startEditionFrom = 1;
const endEditionAt = 500;
const editionSize = 100;

const ramenWeights = [
  {
    value: "Gold",
    from: 1,
    to: 2,
  },
  {
    value: "Brown",
    from: 3,
    to: 40,
  },
  {
    value: "White",
    from: 41,
    to: editionSize,
  },
];

//think about how your layers are built up!
const ramenBowls = {
  white: {
    name: "White",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "White",
            path: `${dir}/white/background_3/whiteBack-01.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Broth",
        elements: [
          {
            id: 0,
            name: "Miso",
            path: `${dir}/white/broth_4/misoBroth-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Shio",
            path: `${dir}/white/broth_4/shioBroth-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Shoyu",
            path: `${dir}/white/broth_4/shoyuBroth-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Tonk",
            path: `${dir}/white/broth_4/tonkBroth-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Noodle",
        elements: [
          {
            id: 0,
            name: "Ramen",
            path: `${dir}/white/noodle_4/ramenNoodle-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Soba",
            path: `${dir}/white/noodle_4/sobaNoodle-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Somen",
            path: `${dir}/white/noodle_4/somenNoodle-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Udon",
            path: `${dir}/white/noodle_4/udonNoodle-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Protein",
        elements: [
          {
            id: 0,
            name: "Tofu",
            path: `${dir}/white/protein_4/tofu-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Beef",
            path: `${dir}/white/protein_4/beef-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Pork",
            path: `${dir}/white/protein_4/pork-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Shrimp",
            path: `${dir}/white/protein_4/shrimp-01.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Onion",
        elements: [
          {
            id: 0,
            name: "Leek",
            path: `${dir}/white/onion_3/leek.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Scallion",
            path: `${dir}/white/onion_3/scallion-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mushroom",
        elements: [
          {
            id: 0,
            name: "Enoki",
            path: `${dir}/white/mushroom_2/enoki-01.png`,
            weight: 60,
          },
          {
            id: 1,
            name: "Shitake",
            path: `${dir}/white/mushroom_2/shitake-01.png`,
            weight: 40,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Veg",
        elements: [
          {
            id: 0,
            name: "Bok Choy",
            path: `${dir}/white/veg_3/bokChoy-01.png`,
            weight: 55,
          },
          {
            id: 1,
            name: "Cilantro",
            path: `${dir}/white/veg_3/cilantro-01.png`,
            weight: 45,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Egg",
        elements: [
          {
            id: 0,
            name: "Boiled",
            path: `${dir}/white/egg_2/boiledEgg.png`,
            weight: 65,
          },
          {
            id: 1,
            name: "Fried",
            path: `${dir}/white/egg_2/friedEgg-01.png`,
            weight: 35,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Garnish",
        elements: [
          {
            id: 0,
            name: "Horse Radish",
            path: `${dir}/white/garnish_6/horseRadish-01.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "White Sesame",
            path: `${dir}/white/garnish_6/whiteSes-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Corn",
            path: `${dir}/white/garnish_6/corn-01.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Black Sesame",
            path: `${dir}/white/garnish_6/blackSesame-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
  brown: {
    name: "Brown",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Brown",
            path: `${dir}/brown/background_3/brownBack.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Broth",
        elements: [
          {
            id: 0,
            name: "Miso",
            path: `${dir}/brown/broth_4/misoBroth-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Shio",
            path: `${dir}/brown/broth_4/shioBroth-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Shoyu",
            path: `${dir}/brown/broth_4/shoyuBroth-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Tonk",
            path: `${dir}/brown/broth_4/tonkBroth-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Noodle",
        elements: [
          {
            id: 0,
            name: "Ramen",
            path: `${dir}/brown/noodle_4/ramenNoodle-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Soba",
            path: `${dir}/brown/noodle_4/sobaNoodle-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Somen",
            path: `${dir}/brown/noodle_4/somenNoodle-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Udon",
            path: `${dir}/brown/noodle_4/udonNoodle-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Protein",
        elements: [
          {
            id: 0,
            name: "Tofu",
            path: `${dir}/brown/protein_4/tofu-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Beef",
            path: `${dir}/brown/protein_4/beef-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Pork",
            path: `${dir}/brown/protein_4/pork-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Shrimp",
            path: `${dir}/brown/protein_4/shrimp-01.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Onion",
        elements: [
          {
            id: 0,
            name: "Leek",
            path: `${dir}/brown/onion_3/leek.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Scallion",
            path: `${dir}/brown/onion_3/scallion-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Veg",
        elements: [
          {
            id: 0,
            name: "Bok Choy",
            path: `${dir}/brown/veg_3/bokChoy-01.png`,
            weight: 55,
          },
          {
            id: 1,
            name: "Cilantro",
            path: `${dir}/brown/veg_3/cilantro-01.png`,
            weight: 45,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mushroom",
        elements: [
          {
            id: 0,
            name: "Enoki",
            path: `${dir}/brown/mushroom_2/enoki-01.png`,
            weight: 60,
          },
          {
            id: 1,
            name: "Shitake",
            path: `${dir}/brown/mushroom_2/shitake-01.png`,
            weight: 40,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Egg",
        elements: [
          {
            id: 0,
            name: "Boiled",
            path: `${dir}/brown/egg_2/boiledEgg.png`,
            weight: 65,
          },
          {
            id: 1,
            name: "Fried",
            path: `${dir}/brown/egg_2/friedEgg-01.png`,
            weight: 35,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Garnish",
        elements: [
          {
            id: 0,
            name: "Horse Radish",
            path: `${dir}/brown/garnish_6/horseRadish-01.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "White Sesame",
            path: `${dir}/brown/garnish_6/whiteSes-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Corn",
            path: `${dir}/brown/garnish_6/corn-01.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Black Sesame",
            path: `${dir}/brown/garnish_6/blackSesame-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
  gold: {
    name: "Gold",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Gold",
            path: `${dir}/gold/background_3/goldBack-01.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Broth",
        elements: [
          {
            id: 0,
            name: "Miso",
            path: `${dir}/gold/broth_4/misoBroth-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Shio",
            path: `${dir}/gold/broth_4/shioBroth-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Shoyu",
            path: `${dir}/gold/broth_4/shoyuBroth-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Tonk",
            path: `${dir}/gold/broth_4/tonkBroth-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Noodle",
        elements: [
          {
            id: 0,
            name: "Ramen",
            path: `${dir}/gold/noodle_4/ramenNoodle-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Soba",
            path: `${dir}/gold/noodle_4/sobaNoodle-01.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Somen",
            path: `${dir}/gold/noodle_4/somenNoodle-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Udon",
            path: `${dir}/gold/noodle_4/udonNoodle-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Protein",
        elements: [
          {
            id: 0,
            name: "Tofu",
            path: `${dir}/gold/protein_4/tofu-01.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Beef",
            path: `${dir}/gold/protein_4/beef-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Pork",
            path: `${dir}/gold/protein_4/pork-01.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Shrimp",
            path: `${dir}/gold/protein_4/shrimp-01.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Veg",
        elements: [
          {
            id: 0,
            name: "Bok Choy",
            path: `${dir}/gold/veg_3/bokChoy-01.png`,
            weight: 55,
          },
          {
            id: 1,
            name: "Cilantro",
            path: `${dir}/gold/veg_3/cilantro-01.png`,
            weight: 45,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Onion",
        elements: [
          {
            id: 0,
            name: "Leek",
            path: `${dir}/gold/onion_3/leek.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Scallion",
            path: `${dir}/gold/onion_3/scallion-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mushroom",
        elements: [
          {
            id: 0,
            name: "Enoki",
            path: `${dir}/gold/mushroom_2/enoki-01.png`,
            weight: 60,
          },
          {
            id: 1,
            name: "Shitake",
            path: `${dir}/gold/mushroom_2/shitake-01.png`,
            weight: 40,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Egg",
        elements: [
          {
            id: 0,
            name: "Boiled",
            path: `${dir}/gold/egg_2/boiledEgg.png`,
            weight: 65,
          },
          {
            id: 1,
            name: "Fried",
            path: `${dir}/gold/egg_2/friedEgg-01.png`,
            weight: 35,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Garnish",
        elements: [
          {
            id: 0,
            name: "Horse Radish",
            path: `${dir}/gold/garnish_6/horseRadish-01.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "White Sesame",
            path: `${dir}/gold/garnish_6/whiteSes-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Corn",
            path: `${dir}/gold/garnish_6/corn-01.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Black Sesame",
            path: `${dir}/gold/garnish_6/blackSesame-01.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  startEditionFrom,
  endEditionAt,
  editionSize,
  ramenBowls,
  ramenWeights,
};
