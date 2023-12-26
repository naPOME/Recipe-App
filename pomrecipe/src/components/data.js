import kitfo from "../assets/kitfo.jpg";
import qiqil from "../assets/qiqil.jpg";
import dorowot from "../assets/dorowot.webp";
import keywot from "../assets/keywot.webp";
export const popularMeal = [
  {
    id: 1,
    name: "Doro Wat",
    image: dorowot,
    description: "Spicy chicken stew served with injera.",
    level:"Hard",
    ingredients: [
      "Chicken",
      "Onions",
      "Berbere spice",
      "Garlic",
      "Vegetable oil",
    ],
    instructions: [
      "Sauté onions in oil until golden.",
      "Add berbere spice and garlic, cook for a few minutes.",
      "Add chicken, cook until browned.",
      "Add water, simmer until chicken is cooked.",
      "Serve over injera.",
    ],
  },
  {
    id: 2,
    name: "Kitfo",
    image: kitfo,
    description: "Minced raw meat, seasoned with spices.",
    level:"Medium",
    ingredients: ["Beef", "Spices", "Clarified butter", "Injera"],
    instructions: [
      "Minced beef mixed with spices.",
      "Served with injera and clarified butter.",
    ],
  },
  {
    id: 3,
    name: "Key Wot",
    image: keywot,
    description: "Description for Dish 1",
    level:"Medium",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    instructions: ["Step 1", "Step 2", "Step 3"],
  },
  {
    id: 4,
    name: "Qiqil",
    image: qiqil,
    level:"Hard",
    description: "Description for Dish 2",
    ingredients: ["Ingredient A", "Ingredient B", "Ingredient C"],
    instructions: ["Step A", "Step B", "Step C"],
  },
];
