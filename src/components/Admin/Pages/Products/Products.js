import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import ProductHeader from './ProductHeader';
import './Products.css';
import lime from '../../../../img/GreenLimes_jrodle.jpg';
import lemon from '../../../../img/Yellow_Limes_y0lbyo.jpg';
import ProductItem from './ProductItem';

const products = [
    {
      id:1,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:2,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    {
      id:3,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:4,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    {
      id:5,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:6,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    {
      id:7,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:8,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    {
      id:9,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:10,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    {
      id:11,
      img: lime,
      name: "Lime",
      price: 1.2
    },
    {
      id:12,
      img: lemon,
      name: "Lemon",
      price: 1.2
    },
    
  ]

const Products = () => {

    return (
        <AdminLayout>
            <div className="admin-products container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <ProductHeader></ProductHeader>
                    </div>
                    <div className="col-lg-12 admin-products-body">
                        <div className="row">
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

export default Products;