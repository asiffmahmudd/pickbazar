import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import Cart from '../Cart/Cart';
import './Products.css'
import Slider from './Slider';
import { useEffect } from 'react';
import { useItem } from '../../contexts/ItemContext';
import Loading from '../Loading/Loading';
import { useState } from 'react';

const Products = ({selectedCategory}) => {
  const {allproducts, loading} = useItem()
  
  const [productArray, setProductArray] = useState(allproducts)
  useEffect(() => {
    setProductArray(allproducts)
  },[allproducts])

  useEffect(() => {
    if(selectedCategory)
      setProductArray(allproducts.filter(pd => pd.category === selectedCategory))
  },[selectedCategory, allproducts])
  
  return (
    <>
      <div className="row mt-4">
        <Loading loading={loading}></Loading>
        <Slider></Slider>
        {
          !loading && productArray.length === 0 &&
          <h3 className="text-center col-md-12 mt-4">No products found</h3>
        }
        {
          productArray?.map((product,index) => {
            return(
              <div className="col-md-3 col-sm-4 col-6" key={index} style={{padding:'0'}}>
                <ProductItem product={product}></ProductItem>
              </div>
            )
          })
        }
      </div>
      <Cart></Cart>
    </>
  );
};

export default Products;