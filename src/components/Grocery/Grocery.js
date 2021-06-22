import React from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import PageLayout from '../PageLayout/PageLayout';
import Cart from '../Cart/Cart';
import './Grocery.css'
import Slider from './Slider';
import products from '../../data/products';

const Grocery = () => {
    return (
      <PageLayout>
        <div className="row mt-4">
          <Slider></Slider>
          {
            products.map((product,index) => {
              return(
                <div className="col-md-3" key={index} style={{padding:'0'}}>
                  <GroceryItem product={product}></GroceryItem>
                </div>
              )
            })
          }
        </div>
        <Cart></Cart>
      </PageLayout>
    );
};

export default Grocery;