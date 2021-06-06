import React from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import lime from '../../img/GreenLimes_jrodle.jpg';
import lemon from '../../img/Yellow_Limes_y0lbyo.jpg'
import PageLayout from '../PageLayout/PageLayout';
import Cart from '../Cart/Cart';

const products = [
    {
      img: lime,
      name: "Lime"
    },
    {
      img: lemon,
      name: "Lemon"
    },
    {
        img: lime,
        name: "Lime"
      },
      {
        img: lemon,
        name: "Lemon"
      },
      {
        img: lime,
        name: "Lime"
      },
      {
        img: lemon,
        name: "Lemon"
      },
      {
        img: lime,
        name: "Lime"
      },
      {
        img: lemon,
        name: "Lemon"
      },
      {
        img: lime,
        name: "Lime"
      },
      {
        img: lemon,
        name: "Lemon"
      },
      {
        img: lime,
        name: "Lime"
      },
      {
        img: lemon,
        name: "Lemon"
      },
    
  ]

const Grocery = () => {
    return (
      <PageLayout>
        <div className="row">
          {
            products.map((product,index) => <GroceryItem key={index} product={product}></GroceryItem>)
          }
        </div>
        <Cart></Cart>
      </PageLayout>
    );
};

export default Grocery;