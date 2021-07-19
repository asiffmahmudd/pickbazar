import React from 'react';
import './SidebarItem.css'

const SidebarItem = ({category, changeCategory, index}) => {

    return (
        <div className="col-md-6 mt-2" style={{padding: '0 5px'}}>
            <div className="sidebar-item p-4 text-center hover-pointer" onClick={()=>changeCategory(index,category.name)}>
                <img className="category-icon" src={`data:image/jpeg;base64,${category?.img.img}`} alt="" />
                <p className="text-center mt-1">{category.name}</p>
            </div>
        </div>
    );
};

export default SidebarItem;