import React from 'react';
import './Category.css';
import { BiPlus } from "react-icons/bi";
import { useState } from 'react';
import CategoryDrawer from './CategoryDrawer';

const CategoryHeader = () => {

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
                            <select id="category" defaultValue="" className="form-control">
                                <option value="" disabled>Category Type</option>
                                <option value="grocery">Grocery</option>
                                <option value="Dairy">Dairy</option>
                                <option value="home">Home</option>
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