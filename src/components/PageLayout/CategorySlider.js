import React from 'react';
import { useItem } from '../../contexts/ItemContext';
import Slider from "react-slick";

const CategorySlider = () => {

    const {categories} = useItem()
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <div>
        <h5>Category</h5>
        <Slider {...settings}>
          {
            categories.map(item => {
              return (
                <div className="slick-item d-flex justify-content-center flex-column  p-3">
                  <p>{item.name}</p>
                  <img src={item.img} alt="" />
                </div>
              )
            })
          }
          {
            categories.map(item => {
              return (
                <div className="slick-item d-flex justify-content-center flex-column  p-3">
                  <p>{item.name}</p>
                  <img src={item.img} alt="" />
                </div>
              )
            })
          }
          {
            categories.map(item => {
              return (
                <div className="slick-item d-flex flex-column  p-3">
                  <p>{item.name}</p>
                  <img src={item.img} alt="" />
                </div>
              )
            })
          }
          
        </Slider>
      </div>
    );
};

export default CategorySlider;