import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { GiFruitBowl, GiMeat, GiMilkCarton, GiRawEgg, GiMirrorMirror } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { BiBone, BiHome, BiDish, BiDrink } from "react-icons/bi";


const categories =[
    {
        id:1,
        name: "Fruits & Vegetables",
        icon: <GiFruitBowl size={40}></GiFruitBowl>
    },
    {
        id:2,
        name: "Meat & Fish",
        icon: <GiMeat size={40}></GiMeat>
    },
    {
        id:3,
        name: "Snacks",
        icon: <FiCoffee size={40}></FiCoffee>
    },
    {
        id:4,
        name: "Pet Care",
        icon: <BiBone size={40}></BiBone>
    },
    {
        id:5,
        name: "Home & Cleaning",
        icon: <BiHome size={40}></BiHome>
    },
    {
        id:6,
        name: "Dairy",
        icon: <GiMilkCarton size={40}></GiMilkCarton>
    },
    {
        id:7,
        name: "Cooking",
        icon: <BiDish size={40}></BiDish>
    },
    {
        id:8,
        name: "Breakfast",
        icon: <GiRawEgg size={40}></GiRawEgg>
    },
    {
        id:9,
        name: "Beverage",
        icon: <BiDrink size={40}></BiDrink>
    },
    {
        id:10,
        name: "Beauty & Health",
        icon: <GiMirrorMirror size={40}></GiMirrorMirror>
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar row mt-4 justify-content-center">
            {
                categories.map((category,index) => <SidebarItem key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;