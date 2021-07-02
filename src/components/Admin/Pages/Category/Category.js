import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import './Category.css'
import CategoryHeader from './CategoryHeader'
import { useState } from "react";
import categories from '../../../../data/categories';
import CategoryItem from './CategoryItem';
import { useEffect } from 'react';
import DeleteBar from './DeleteBar';

const Category = () => {

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])


    useEffect(() => {
        if(selected.length < categories.length){
            setIsAllChecked(false)
        }
        else if(selected.length === categories.length){
            setIsAllChecked(true)
        }
        if(selected.length > 0){
            setDeselectAll(false)
        }
        else if(selected.length === 0){
            setDeselectAll(true)
        }
    }, [selected])

    const handleDelete = () => {
        console.log(selected)
    }
    
    const handleAll = (e) => {
        if(e.target.checked){
            setIsAllChecked(true)
            setDeselectAll(false)
        }
        else{
            setIsAllChecked(false)
            setDeselectAll(true)
        }
    }


    return (
        <AdminLayout>
            <div className="admin-category admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CategoryHeader></CategoryHeader>
                    </div>
                    {
                        selected.length > 0 &&
                        <div className="col-lg-12 mt-3" style={{padding:0}}>
                            <DeleteBar
                                handleDelete={handleDelete}
                            >
                            </DeleteBar>
                        </div>
                    }
                    <div className="col-lg-12 admin-products-body mt-5">
                        <div className="table-responsive">
                            <table className="table bg-white border table-borderless">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" className="mt-2 ml-2" checked={isAllChecked} onChange={handleAll} name="category-item" value={categories}/>
                                        </th>
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
                                        categories.map((category,index) => (
                                            <CategoryItem 
                                                key={index} 
                                                category={category}
                                                isAllChecked={isAllChecked} 
                                                setSelected={setSelected} 
                                                deselectAll={deselectAll}
                                                selected={selected}
                                            >
                                            </CategoryItem>)
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </AdminLayout>
    );
};

export default Category;