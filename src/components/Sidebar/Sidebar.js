import React from 'react';
import './Sidebar.css';
import { faAppleAlt, faFish, faCoffee, faBone, faHome, faEgg, faHamburger, faWineGlassAlt, faMagic, faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import SidebarItem from './SidebarItem/SidebarItem';

const categories =[
    {
        name: "Fruits & Vegetables",
        icon: faAppleAlt
    },
    {
        name: "Meat & Fish",
        icon: faFish
    },
    {
        name: "Snacks",
        icon: faCoffee
    },
    {
        name: "Pet Care",
        icon: faBone
    },
    {
        name: "Home & Cleaning",
        icon: faHome
    },
    {
        name: "Dairy",
        icon: faEgg
    },
    {
        name: "Cooking",
        icon: faBreadSlice
    },
    {
        name: "Breakfast",
        icon: faHamburger
    },
    {
        name: "Beverage",
        icon: faWineGlassAlt
    },
    {
        name: "Beauty & Health",
        icon: faMagic
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