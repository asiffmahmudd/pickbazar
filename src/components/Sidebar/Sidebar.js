import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { useItem } from '../../contexts/ItemContext';

const Sidebar = ({param,changeCategory}) => {

    const {categories} = useItem();
    
    return (
        <div className="sidebar mt-4">
            {
                categories.map((category,index) => <SidebarItem param={param} changeCategory={changeCategory} index={index} key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;