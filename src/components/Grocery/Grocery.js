import React from 'react';
import GroceryItem from './GroceryItem/GroceryItem';
import lime from '../../img/GreenLimes_jrodle.jpg';
import lemon from '../../img/Yellow_Limes_y0lbyo.jpg'
import PageLayout from '../PageLayout/PageLayout';
import Cart from '../Cart/Cart';
import slider1 from '../../img/slider-1.jpg';
import slider2 from '../../img/slider-2.jpg';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import './Grocery.css'

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
        <div className="row mt-4">
          <div id="carouselControls" className="carousel slide p-1" data-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="d-block w-100 rounded" src={slider1} alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100 rounded" src={slider2} alt="Second slide"/>
                  </div>
              </div>
              <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                  <span className="carousel-control">
                    <GrFormPrevious size={20} color="black"></GrFormPrevious>
                  </span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                  <span className="carousel-control">
                    <GrFormNext size={20} color="black"></GrFormNext>
                  </span>
                  
                  <span className="sr-only">Next</span>
              </a>
          </div>
          {
            products.map((product,index) => <GroceryItem key={index} product={product}></GroceryItem>)
          }
        </div>
        <Cart></Cart>
      </PageLayout>
    );
};

export default Grocery;