import React from "react";
import Slider from "react-slick";
import Project from "./project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "slider">
        <Slider {...settings}>
            <div>
            <Project id={0}/>
            </div>
            <div>
            <Project id={1}/>
            </div>
            <div>
            <Project id={2}/>
            </div>
          
        </Slider>
      </div>
      
    );
  }
}