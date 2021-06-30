import React from 'react';
import { useState } from 'react';
import AdminProductDrawer from './AdminProductDrawer';

const AdminProductItem = ({product}) => {

    const [isProductDrawerOpen, setProductDrawerOpen] = useState(false);
    
    const handleProductDrawerOpen = () => {
        
        setProductDrawerOpen(true);
    }

    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    }
    return (
        <>
        <div className="admin-product-item col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mb-2 hover-pointer" onClick={() => handleProductDrawerOpen(product)}>
            <div className="card border-0">
                <div className="admin-product-item-img-container">
                    <img className="card-img-top" src={product.img[0]} alt="" />
                    {
                        product.discount > 0 &&
                        <p className="admin-item-discount">{product.discount}%</p>
                    }
                </div>
                
                <div className="card-body">
                    {
                        product.discount > 0 &&
                        <>
                            <h5 className="card-title">${product.sale}</h5> 
                            <span className="discount-price">${product.price}</span>
                            
                        </>
                    }
                    {
                        product.discount === 0 &&
                        <h5 className="card-title">${product.price}</h5>
                    }
                    <p className="card-text">{product.name}</p>
                </div>
            </div>
        </div>
        <AdminProductDrawer product={product} isProductDrawerOpen={isProductDrawerOpen} handleProductDrawerClose={handleProductDrawerClose}></AdminProductDrawer>
        </>
    );
};

export default AdminProductItem;