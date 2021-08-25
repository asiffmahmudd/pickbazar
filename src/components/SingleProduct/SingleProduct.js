import React from 'react';
import { useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import UserDashboardHeader from '../UserDashboard/UserDashboardHeader/UserDashboardHeader';
import SingleProductCarousel from './SingleProductCarousel';
import './SingleProduct.css';
import ProductButton from '../Products/ProductButton/ProductButton';
import ProductItem from '../Products/ProductItem/ProductItem';
import { useItem } from '../../contexts/ItemContext';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';
import { useState } from 'react';

const SingleProduct = () => {

    const productId = useParams('id');
    const {allproducts, loading} = useItem()
    const [product, setProduct] = useState()
    const [related, setRelated] = useState()

    useEffect(() => {
        setProduct(allproducts.find(pd => pd._id === productId.id))
        setRelated(allproducts?.filter(pd => pd.category === product?.category && pd._id !== productId.id))
        window.scrollTo(0, 0)
    },[allproducts,product, productId.id])
    
    return (
        <div className="single-product">
            <Loading loading={loading}></Loading>
            <UserDashboardHeader></UserDashboardHeader>
            { product &&
            <>
            <div className="bg-white border-top single-product-container" style={{marginTop: '89px'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 cstm-right-border cstm-padding">
                            <SingleProductCarousel product={product}></SingleProductCarousel>
                        </div>
                        <div className="col-lg-6 cstm-padding">
                            <div className="p-4">
                                <h3 className="single-product-title">{product.name}</h3>
                                {
                                    product.sale > 0 &&
                                    <>
                                        <s className="discount-price">${product.price}</s>
                                        <h5 className="card-title d-inline-block ml-2">${product.sale}</h5> 
                                    </>
                                }
                                {
                                    product.sale === 0 &&
                                    <h5 className="card-title">${product.price}</h5>
                                }
                                <p className="single-product-desc">{product.desc}</p>
                                <ProductButton product={product}></ProductButton>
                                <p className="single-product-tags">Tags: <strong>{product.tags.map(tag => tag.name+", ")}</strong></p>
                                {
                                    product.quantity === 0 &&
                                    <p style={{color:'red'}}>Out of stock</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pb-5">
                {
                    related.length > 0 &&
                    <div className="container-fluid">
                        <div className="row mt-5 related-items-row" >
                            <div className="col-lg-12" style={{paddingLeft:'5px'}}>
                                <h3>Related Items</h3>
                            </div>
                            {
                                related.map((product,index) => {
                                    return (
                                        <div key={index} className="col-md-2 col-6" style={{padding:'0'}}>
                                            <ProductItem product={product}></ProductItem>
                                        </div>
                                    )
                                })
                            }
                            <div>

                            </div>
                        </div>
                    </div>
                }

            </div>
            </>
            }   
            <Cart></Cart>
            
        </div>
    );
};

export default SingleProduct;