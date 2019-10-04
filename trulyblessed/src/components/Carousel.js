import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

export default class SimpleSlider extends Component {
  render() {
    const Styles = styled.div`
      img {
        height: 95vh;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .title2 {
        font-family: "Fugaz One", cursive;
        color: red;
        letter-spacing: 0.5em;
        text-transform: uppercase;
      }
    `;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Styles>
        <div>
          <Slider {...settings}>
            <div>
              <img src="/gallery/img2.jpg" />
            </div>
            <div>
              <img src="/gallery/img3.jpg" />
            </div>
            <div>
              <img src="/gallery/img4.jpg" />
            </div>
            <div>
              <img src="/gallery/img5.jpg" />
            </div>
            <div>
              <img src="/gallery/img6.jpg" />
            </div>
            <div>
              <img src="/gallery/img7.jpg" />
            </div>
            <div>
              <img src="/gallery/img8.jpg" />
            </div>
            <div>
              <img src="/gallery/img9.jpg" />
            </div>
            <div>
              <img src="/gallery/img1.jpg" />
            </div>
          </Slider>
        </div>
      </Styles>
    );
  }
}
