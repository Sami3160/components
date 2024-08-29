import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function Banner1() {
    const images=[
        "src/assets/images/img1.png",
        "src/assets/images/img2.jpg",
        "src/assets/images/img3.jpg",
    ]

    var settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
        arrows: false, 
        // fade:true
        pauseOnHover:false,
    };
  return (
    <Slider {...settings}>
        {
            images.map((image, index)=>{
                return(
                    <div className="relative" key={index}>
                        <img src={image} alt="" className="h-[100vh] w-full object-cover"/>
                    </div>
                )
            })
        }
    </Slider>
  );
}