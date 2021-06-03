import React from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import lime from '../../img/GreenLimes_jrodle.jpg';
import lemon from '../../img/Yellow_Limes_y0lbyo.jpg'

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
        <div className="row">
          {
            products.map((product,index) => <GroceryItem key={index} product={product}></GroceryItem>)
          }
        </div>
    );
};

export default Grocery;