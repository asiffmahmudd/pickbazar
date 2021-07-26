import React from 'react';
import './SidebarItem.css'

const SidebarItem = ({category, param, changeCategory, index}) => {

    return (
        <div className="col-md-6 mt-2" style={{padding: '0 5px'}}>
            <div className={"sidebar-item p-4 text-center hover-pointer "+(param === category.name?"active":"")} onClick={()=>changeCategory(index,category.name)}>
                <img className="category-icon" src={category?.img} alt="" />
                <p className="text-center mt-1">{category.name}</p>
            </div>
        </div>
    );
};

export default SidebarItem;