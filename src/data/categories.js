import { GiFruitBowl, GiMeat, GiMilkCarton, GiRawEgg, GiMirrorMirror } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { BiBone, BiHome, BiDish, BiDrink } from "react-icons/bi";

const categories =[
    {
        id:1,
        name: "Fruits & Vegetables",
        img: <GiFruitBowl size={40}></GiFruitBowl>,
        slug: 'fruits-vegetables',
        type: 'Grocery'
    },
    {
        id:2,
        name: "Meat & Fish",
        img: <GiMeat size={40}></GiMeat>,
        slug: 'meat-fish',
        type: 'Make Up'
    },
    {
        id:3,
        name: "Snacks",
        img: <FiCoffee size={40}></FiCoffee>,
        slug: 'snacks',
        type: 'Grocery'
    },
    {
        id:4,
        name: "Pet Care",
        img: <BiBone size={40}></BiBone>,
        slug: 'petcare',
        type: 'Grocery'
    },
    {
        id:5,
        name: "Home & Cleaning",
        img: <BiHome size={40}></BiHome>,
        slug: 'home-cleaning',
        type: 'Grocery'
    },
    {
        id:6,
        name: "Dairy",
        img: <GiMilkCarton size={40}></GiMilkCarton>,
        slug: 'dairy',
        type: 'Grocery'
    },
    {
        id:7,
        name: "Cooking",
        img: <BiDish size={40}></BiDish>,
        slug: 'cooking',
        type: 'Grocery' 
    },
    {
        id:8,
        name: "Breakfast",
        img: <GiRawEgg size={40}></GiRawEgg>,
        slug: 'breakfast',
        type: 'Grocery'
    },
    {
        id:9,
        name: "Beverage",
        img: <BiDrink size={40}></BiDrink>,
        slug: 'beverage',
        type: 'Grocery'
    },
    {
        id:10,
        name: "Beauty & Health",
        img: <GiMirrorMirror size={40}></GiMirrorMirror>,
        slug: 'beauty-health',
        type: 'Grocery'
    }
]

export default categories;