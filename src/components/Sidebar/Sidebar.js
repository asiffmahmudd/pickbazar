import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import categories from '../../data/categories';

const Sidebar = ({changeCategory}) => {
    
    return (
        <div className="sidebar mt-4 justify-content-center">
            {
                categories.map((category,index) => <SidebarItem changeCategory={changeCategory} index={index} key={index} category={category}></SidebarItem>)
            }
        </div>
    );
};

export default Sidebar;