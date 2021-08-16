import React from 'react';
import { useItem } from '../../contexts/ItemContext';
import Slider from "react-slick";

const CategorySlider = ({changeCategory}) => {

    const {categories} = useItem()
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };

    return (
        <div>
        <h5>Category</h5>
        <Slider {...settings}>
          {
            categories.map((item, index) => {
              return (
                <div key={index} className="slick-item d-flex justify-content-center flex-column align-items-center p-3" onClick={()=>changeCategory(index,item.id)}>
                  <p className="text-center">{item.name}</p>
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