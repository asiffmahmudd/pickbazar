import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import './Category.css'
import CategoryHeader from './CategoryHeader'
import { useState } from "react";
import CategoryItem from './CategoryItem';
import { useEffect } from 'react';
import DeleteBar from './DeleteBar';
import Loading from '../../../Loading/Loading';
import { useItem } from '../../../../contexts/ItemContext';

const Category = () => {

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])
    const {categories, allcategories, setCategories, categoryLoading, setCategoryLoading} = useItem()

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
    }, [selected, categories.length])

    const handleBulkDelete = () => {
        setCategoryLoading(true)
        const selectedIds = selected.map(item => item._id) 
        fetch(`https://pickbazar-clone.herokuapp.com/deleteBulkCategory/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedIds)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const newList = categories.filter(item => {
                    let deleteItem = selected.find(item2 => item._id === item2._id)
                    return deleteItem? false: true
                })
                setCategories(newList)
            }
            resetSelection()
            setCategoryLoading(false)
        })
        .catch(e => {
            alert(e.message)
        })
    }

    const handleSingleDelete = (id) => {
        setCategoryLoading(true)
        fetch(`https://pickbazar-clone.herokuapp.com/deleteCategory/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setCategories(categories.filter(item => item._id !== id))
                resetSelection()
            }
            setCategoryLoading(false)
        })
        .catch(e => {
            alert(e.message)
        })
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

    const resetSelection = () => {
        setDeselectAll(true)
        setSelected([])
        setIsAllChecked(false)
    }

    const [search, setSearch] = useState("")
    const categoryFilter = (value, query) => {
        setCategoryFilterState(value)
        if(search && query){
            let newProductList = handleSearchWithValue(search)
            if(value === "all"){
                setCategories(newProductList)
            }
            else{
                newProductList = newProductList.filter(item => item.type === value)
                setCategories(newProductList)
            }
        }
        else if(value === "all"){
            setCategories(allcategories)
        }
        else{
            const newCategories = allcategories.filter(item => item.type === value)
            setCategories(newCategories)
        }
        resetSelection()
    }

    const handleSearchWithValue = (value) => {
        let newList = allcategories.slice()
        const word = value
        newList = newList.filter(item => {
            const arr = item.name.toLowerCase().split(" ")
            const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
            return match ? true : false
        })
        return newList
    }
    
    const [categoryFilterState, setCategoryFilterState] = useState(false)
    const handleSearch = (e) => {
        if(e.target.value === ""){
            setSearch(null)
            if(categoryFilterState){
                categoryFilter(categoryFilterState, false)
            }
            else{
                setCategories(allcategories.slice())
            }
            resetSelection()
        }
        else if(e.which === 13){
            setSearch(e.target.value)
            let newList = allcategories.slice()
            const word = e.target.value
            newList = newList.filter(item => {
                const arr = item.name.toLowerCase().split(" ")
                const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
                return match ? true : false
            })
            setCategories(newList)
            setTypeFilter("")
            setCategoryFilterState("")
            resetSelection()
        }
    }

    const [typeFilter, setTypeFilter] = useState("")

    useEffect(() =>{
        setTypeFilter("")
        setCategoryFilterState(false)
        setCategories(allcategories)
    },[allcategories, setCategories])

    return (
        <AdminLayout>
            <Loading loading={categoryLoading}></Loading>
            <div className="admin-category admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CategoryHeader 
                            handleSearch={handleSearch} 
                            categoryFilter={categoryFilter}
                            typeFilter={typeFilter}
                            setTypeFilter={setTypeFilter}
                        />
                    </div>
                    {
                        selected.length > 0 &&
                        <div className="col-lg-12 mt-3" style={{padding:0}}>
                            <DeleteBar
                                handleBulkDelete={handleBulkDelete}
                            >
                            </DeleteBar>
                        </div>
                    }
                    {
                        categories.length === 0 && !categoryLoading &&
                        <h1 className="col-md-12 mt-4 text-center">No categories found</h1>
                    }
                    {
                        categories.length > 0 &&
                        <div className="col-lg-12 admin-products-body mt-5">
                            <div className="table-responsive">
                                <table className="table bg-white border table-borderless">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" className="mt-2 ml-2" checked={isAllChecked} onChange={handleAll} name="category-item" value={categories}/>
                                            </th>
                                            <th scope="col">Index</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            {/* <th scope="col">Slug</th> */}
                                            <th scope="col">Type</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories.map((category,index) => (
                                                <CategoryItem 
                                                    key={index} 
                                                    index={index}
                                                    category={category}
                                                    categories={categories}
                                                    isAllChecked={isAllChecked} 
                                                    setSelected={setSelected} 
                                                    deselectAll={deselectAll}
                                                    selected={selected}
                                                    handleSingleDelete={handleSingleDelete}
                                                >
                                                </CategoryItem>)
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    }
                </div>
            </div>
            
        </AdminLayout>
    );
};

export default Category;