import React from 'react';
import './Category.css';
import { BiPlus } from "react-icons/bi";
import { useState } from 'react';
import CategoryDrawer from './CategoryDrawer';

const CategoryHeader = ({categoryFilter}) => {

    const [isCategoryDrawerOpen, setCategoryDrawerOpen] = useState(false);

    const handleCategoryDrawerOpen = () => {
        setCategoryDrawerOpen(true)
    }

    const handleCategoryDrawerClose = () => {
        setCategoryDrawerOpen(false);
    }

    return (
        <>
            <div className="row header-content-row">
                <div className="header-title col-lg-2">Category</div>
                <div className="col-lg-10">
                    <div className ="row">
                        <div className="form-group col-lg-3">
                            <select id="category" defaultValue="" onChange={categoryFilter} className="form-control">
                                <option value="" disabled>Category Type</option>
                                <option value="all">All</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Home">Home</option>
                                <option value="Make Up">Make Up</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Pet">Pet</option>
                            </select>
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="text" id="search" className="form-control" placeholder="Ex: Search By Name"/>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-category-btn" onClick={()=>handleCategoryDrawerOpen("add")}>
                                <BiPlus size={20}></BiPlus> Add Category
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryDrawer isCategoryDrawerOpen={isCategoryDrawerOpen} handleCategoryDrawerClose={handleCategoryDrawerClose}></CategoryDrawer>
        </>
    );
};

export default CategoryHeader;