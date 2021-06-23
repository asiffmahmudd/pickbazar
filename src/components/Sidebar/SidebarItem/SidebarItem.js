import React from 'react';
import './SidebarItem.css'

const SidebarItem = ({category}) => {
    return (
        <div className="col-md-6 mt-2" style={{padding: '0 5px'}}>
            <div className="sidebar-item p-4 text-center">
                {category.img}
                <p className="text-center mt-1">{category.name}</p>
            </div>
        </div>
    );
};

export default SidebarItem;