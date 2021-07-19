import React, { useEffect } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { useState } from 'react';
import { useItem } from '../../contexts/ItemContext';

const Sidebar = ({changeCategory}) => {

    const {categories} = useItem();
    useEffect(()=>{
        
    },[])
    
    return (
        <div className="sidebar mt-4 justify-content-center">
            {
                categories.map((category,index) => <SidebarItem changeCategory={changeCategory} index={index} key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;