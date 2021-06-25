import React from 'react';
import Products from '../Products/Products';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './PageLayout.css';
import { useState } from 'react';

const PageLayout = () => {

    const [selectedCategory, setSelectedCategory] = useState();

    const changeClass = (index, categoryName) => {
        let items = document.querySelectorAll('.sidebar-item.active')
        if(items.length)
            items[0].classList.remove('active')
        items = document.querySelectorAll('.sidebar .sidebar-item')
        items[index].classList.add('active')
        setSelectedCategory(categoryName)
        
    }

    const changeClassMobile = (index, categoryName) => {
        let items = document.querySelectorAll('.filter-drawer-item.active')
        if(items.length)
            items[0].classList.remove('active')
        items = document.querySelectorAll('.filter-drawer-item')
        items[index].classList.add('active')
        setSelectedCategory(categoryName)
        
    }

    return (
        <div>
            <Header changeClassMobile={changeClassMobile} selectedCategory={selectedCategory}></Header>
            <div className="container-fluid pb-5" style={{marginTop: '89px'}}>
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar-container sidebar-desktop-view">
                        <Sidebar changeClass={changeClass}></Sidebar>
                    </div>
                    <div className="col-lg-9 product-container justify-content-center">
                        {
                            <Products selectedCategory={selectedCategory}></Products>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLayout;