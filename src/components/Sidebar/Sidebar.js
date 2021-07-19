import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { useItem } from '../../contexts/ItemContext';

const Sidebar = ({changeCategory}) => {

    const {categories} = useItem();
    
    return (
        <div className="sidebar mt-4 justify-content-center">
            {
                categories.map((category,index) => <SidebarItem changeCategory={changeCategory} index={index} key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;