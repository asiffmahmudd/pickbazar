import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import ProductHeader from './AdminProductHeader';
import './AdminProducts.css';
import ProductItem from './AdminProductItem';
import products from '../../../../data/products';

const AdminProducts = () => {
    return (
        <AdminLayout >
            <div className="admin-products container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <ProductHeader></ProductHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body">
                        <div className="row pb-5">
                            {
                                products.map((product,index) => <ProductItem key={index} product={product} ></ProductItem>)
                            }
                        </div>
                        
                    </div>
                </div>
            </div>

        </AdminLayout>
    );
};

export default AdminProducts;