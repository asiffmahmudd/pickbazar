import React from 'react';
import './SidebarItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SidebarItem = ({category}) => {
    return (
        <div className="sidebar-item col-md-5 m-1 p-4">
            {category.icon}
            <p className="text-center mt-1">{category.name}</p>
        </div>
    );
};

export default SidebarItem;