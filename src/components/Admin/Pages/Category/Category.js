import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import './Category.css'
import CategoryHeader from './CategoryHeader'
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { useState } from "react";
import CategoryDrawer from './CategoryDrawer.js';
import categories from '../../../../data/categories';

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
            <div className="category-category admin container-fluid">
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
                                        categories.map((category,index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{category.id}</th>
                                                    <td>{category.img}</td>
                                                    <td>{category.name}</td>
                                                    <td>{category.slug}</td>
                                                    <td>{category.type}</td>
                                                    <td>
                                                        <BiEdit color="green" onClick={()=> handleCategoryDrawerOpen(category)} className="mr-2 hover-pointer"></BiEdit>
                                                        <BsTrash color='red' onClick={() => handleCategoryDelete(category)} className="hover-pointer"></BsTrash>
                                                    </td>
                                                </tr>
                                            )
                                        })
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