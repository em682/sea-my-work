import React from "react";
import Slider from "react-slick";
import Project from "./project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
       
          <Project id={0}/>
       
          <Project id={1}/>
        
          <Project id={2}/>
        
      </Slider>
    );
}