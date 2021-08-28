import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomDot = ({ product, onClick, ...rest  }) => {
  
    const {
      index,
      active,
    } = rest;

    return (
      <li className={"hover-pointer "+(active ? "active" : "inactive")} onClick={() => onClick()} >
        <img src={product.img[index]} alt="" />
      </li>
    );
  };

const SingleProductCarousel = ({product}) => {
    const carouselItems = product?.img;
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
      };
    return (
        <div id="main-slide" className="carousel slide pb-5" data-ride="carousel">
            <div className="carousel-inner p-4">
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    customDot={<CustomDot product={product} />}
                >
                    {
                        carouselItems.map((item, index) => {
                          return (
                              
                            <img
                                key={index}
                                className="d-block single-product-carousel-img" style={{margin:'0 auto'}}
                                src={item}
                                alt="First slide"
                            />
                              
                          )
                        })
                    }
                </Carousel>
            </div>
        </div>
        
    );
};

export default SingleProductCarousel;