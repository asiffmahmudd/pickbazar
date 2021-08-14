import React from 'react';
import Products from '../Products/Products';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './PageLayout.css';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SubCategoryDrawer from '../SubCategoryDrawer/SubCategoryDrawer';
import { useItem } from '../../contexts/ItemContext';

const PageLayout = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [subCategory, setSubCategory] = useState("");
    const [index, setIndex] = useState(null);
    const params = useParams()
    const history = useHistory();

    const changeClass = () => {
        let items = document.querySelectorAll('.sidebar-item.active')
        if(items.length)
            items[0].classList.remove('active')
        items = document.querySelectorAll('.sidebar .sidebar-item')
        if(params.index)
            items[params.index]?.classList.add('active')
    }

    const changeClassMobile = () => {
        let items = document.querySelectorAll('.filter-drawer-item.active')
        if(items.length)
            items[0].classList.remove('active')
        items = document.querySelectorAll('.filter-drawer-item')
        if(params.index){
            items[params.index]?.classList.add('active')
        }
    }

    useEffect(() => {
        changeClass()
        changeClassMobile()
        setSelectedCategory(params.category)
        setSubCategory(params.subCategory)
    }, [params, subCategory])

    const {categories} = useItem();
    const [subCategoryList, setSubCategoryList] = useState([])
    const changeCategory = (index,categoryId) => {
        setSubCategoryList(categories.find(item=> item.id === categoryId).subCategory)
        setSelectedCategory(categoryId)
        setIndex(index)
        setSubCategoryDrawerOpen(true)
    }

    const filterWithCategory = (subCategory) => {
        setSubCategoryDrawerOpen(false)
        history.push('/category/'+index+'/'+selectedCategory+"/"+subCategory)
    }

    const [isSubCategoryDrawerOpen, setSubCategoryDrawerOpen] = useState(false)
    const handleSubCategoryDrawerClose = () => {
        setSubCategoryDrawerOpen(false)
    }
    const param = useParams().category

    return (
        <div className="home">
            <Header changeCategory={changeCategory} selectedCategory={selectedCategory} subCategory={subCategory} ></Header>
            <div className="container-fluid pb-5" style={{marginTop: '89px'}}>
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar-container sidebar-desktop-view">
                        <Sidebar param={param} changeCategory={changeCategory}></Sidebar>
                    </div>
                    <div className="col-lg-9 product-container justify-content-center">
                        {
                            <Products selectedCategory={selectedCategory} subCategory={subCategory}></Products>
                        }
                    </div>
                </div>
            </div>
            <SubCategoryDrawer
                filterWithCategory={filterWithCategory}
                setSubCategory={setSubCategory}
                subCategoryList={subCategoryList}
                isSubCategoryDrawerOpen={isSubCategoryDrawerOpen}
                handleSubCategoryDrawerClose={handleSubCategoryDrawerClose}
            />
        </div>
    );
};

export default PageLayout;