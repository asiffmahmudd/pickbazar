import React, { useState } from 'react';
import slider1 from '../../img/slider-1.jpg';
import slider2 from '../../img/slider-2.jpg';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./Slider.css";
import { useEffect } from 'react';
import { getSlider } from '../../utils/network';

const Slider = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getSlider()
        .then(result => {
            setImages(result)
        })
    }, [])
    
    return (
        <>
            {
                images?.length > 0 &&
                <div id="carouselControls" className="carousel slide p-1" data-ride="carousel">
                    <div className="carousel-inner">
                        {
                            images.map((item, index) => {
                                return (
                                    <div key={index} className={"carousel-item "+(index===0?"active":"")}>
                                        <img className="d-block w-100 rounded" src={item.img} alt=""/>
                                    </div>
                                )
                            })
                        }
                        
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
            }
        </>
    );
};

export default Slider;