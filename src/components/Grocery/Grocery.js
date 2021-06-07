import React from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import lime from '../../img/GreenLimes_jrodle.jpg';
import lemon from '../../img/Yellow_Limes_y0lbyo.jpg'
import PageLayout from '../PageLayout/PageLayout';
import Cart from '../Cart/Cart';

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