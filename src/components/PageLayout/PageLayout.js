import React from 'react';
import Products from '../Products/Products';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './PageLayout.css';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PageLayout = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const params = useParams()
    const history = useHistory();

    const changeClass = () => {
        let items = document.querySelectorAll('.sidebar-item.active')
        if(items.length)
            items[0].classList.remove('active')
        items = document.querySelectorAll('.sidebar .sidebar-item')
        if(params.index)
            items[params.index].classList.add('active')
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
    }, [params])

    const changeCategory = (index,categoryName) => {
        history.push('/'+index+'/'+categoryName)
    }

    

    return (
        <div className="home">
            <Header changeCategory={changeCategory} selectedCategory={selectedCategory}></Header>
            <div className="container-fluid pb-5" style={{marginTop: '89px'}}>
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar-container sidebar-desktop-view">
                        <Sidebar changeCategory={changeCategory}></Sidebar>
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