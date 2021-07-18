import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import Cart from '../Cart/Cart';
import './Products.css'
import Slider from './Slider';
import { useEffect } from 'react';
import { useItem } from '../../contexts/ItemContext';
import Loading from '../Loading/Loading';

const Products = ({selectedCategory}) => {
  const {allproducts, loading} = useItem()
  let productArray = allproducts

  useEffect(() => {
    productArray = allproducts
  },[allproducts])

  if(selectedCategory){
    productArray = allproducts.filter(pd => pd.category === selectedCategory)
  }

  return (
    <>
      <div className="row mt-4">
        <Loading loading={loading}></Loading>
        <Slider></Slider>
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