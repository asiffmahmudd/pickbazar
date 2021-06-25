import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import Cart from '../Cart/Cart';
import './Products.css'
import Slider from './Slider';
import products from '../../data/products';

const Products = ({selectedCategory}) => {
  let productArray = products
  if(selectedCategory){
    productArray = productArray.filter(pd => pd.type === selectedCategory)
  }

  return (
    <>
      <div className="row mt-4">
        <Slider></Slider>
        {
          productArray?.map((product,index) => {
            return(
              <div className="col-md-3" key={index} style={{padding:'0'}}>
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