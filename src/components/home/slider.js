import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      lazyLoad: true,
      adaptiveHeight: true,
      className: "slider variable-width"
    };
    const style = {
      width: "100%",
      minHeight: 200,
      objectFit: "cover"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              style={style}
              src={require("./images/imnotokwiththis.jpg")}
              alt=""
            />
          </div>
          <div>
            <img style={style} src={require("./images/joker.jpg")} alt="" />
          </div>
          <div>
            <img style={style} src={require("./images/sonic.jpg")} alt="" />
          </div>
          <div>
            <img style={style} src={require("./images/troopzero.jpg")} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
