import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { GiFruitBowl, GiMeat, GiMilkCarton, GiRawEgg, GiMirrorMirror } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { BiBone, BiHome, BiDish, BiDrink } from "react-icons/bi";


const categories =[
    {
        name: "Fruits & Vegetables",
        icon: <GiFruitBowl size={40}></GiFruitBowl>
    },
    {
        name: "Meat & Fish",
        icon: <GiMeat size={40}></GiMeat>
    },
    {
        name: "Snacks",
        icon: <FiCoffee size={40}></FiCoffee>
    },
    {
        name: "Pet Care",
        icon: <BiBone size={40}></BiBone>
    },
    {
        name: "Home & Cleaning",
        icon: <BiHome size={40}></BiHome>
    },
    {
        name: "Dairy",
        icon: <GiMilkCarton size={40}></GiMilkCarton>
    },
    {
        name: "Cooking",
        icon: <BiDish size={40}></BiDish>
    },
    {
        name: "Breakfast",
        icon: <GiRawEgg size={40}></GiRawEgg>
    },
    {
        name: "Beverage",
        icon: <BiDrink size={40}></BiDrink>
    },
    {
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