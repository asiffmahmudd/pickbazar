import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './PageLayout.css';

const PageLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <div className="container-fluid pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-3 sidebar-container">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 product-container justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLayout;