import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import categories from '../../data/categories';
import FilterDrawerItem from './FilterDrawerItem';
import { AiOutlineClose } from "react-icons/ai";

const FilterDrawer = ({isFilterDrawerOpen, handleFilterDrawerClose, changeClassMobile}) => {

    return (
        <Drawer className="category-drawer drawer" anchor={"bottom"} open={isFilterDrawerOpen} onClose={() => handleFilterDrawerClose()}>
            <div className="filter-drawer-close-btn" onClick={handleFilterDrawerClose}>
                    <AiOutlineClose color="black" size={20}></AiOutlineClose>
                </div>
            <div className="mobile-view-filter row bg-white p-4">
                {
                    categories.map((category,index) => <FilterDrawerItem index={index} changeClassMobile={changeClassMobile} key={index} category={category}></FilterDrawerItem>)
                }
            </div>
        </Drawer>
    );
};

export default FilterDrawer;