import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import './Category.css'
import CategoryHeader from './CategoryHeader'
import { useState } from "react";
import CategoryDrawer from './CategoryDrawer.js';
import categories from '../../../../data/categories';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [isCategoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
    const [category, setCategory] = useState()
    
    const handleCategoryDrawerOpen = (cat) => {
        if(cat !== 'add'){
            setCategory({
                id: cat.id,
                name: cat.name,
                slug: cat.slug,
                img: cat.img,
                type: cat.type
            })
            
        }
        else{
            setCategory(null)
        }
        
        setCategoryDrawerOpen(true);
        
    }

    const handleCategoryDrawerClose = () => {
        setCategoryDrawerOpen(false);
    }

    const handleCategoryDelete = () => {

    }

    return (
        <AdminLayout>
            <div className="admin-category admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CategoryHeader handleCategoryDrawerOpen={handleCategoryDrawerOpen}></CategoryHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((category,index) => <CategoryItem key={index} handleCategoryDrawerOpen={handleCategoryDrawerOpen} handleCategoryDelete={handleCategoryDelete} category={category}></CategoryItem>)
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
            <CategoryDrawer category={category} isCategoryDrawerOpen={isCategoryDrawerOpen} handleCategoryDrawerClose={handleCategoryDrawerClose}></CategoryDrawer>
        </AdminLayout>
    );
};

export default Category;