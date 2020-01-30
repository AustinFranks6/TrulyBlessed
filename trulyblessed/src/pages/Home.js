import React from "react";
import styled from "styled-components";
import { FaInstagram, FaRegArrowAltCircleDown } from "react-icons/fa";
import Carousel from "../components/Carousel";

const Styles = styled.div`
  .pageOne {
    height: 100vh;
    width: 100vw;
    width: 100%;
  }
  .pageOne {
    /* border-left: solid;
    border-width: 100px;
    border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%; */
  }

  .pageOneContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-family: "Fugaz One", cursive;
    letter-spacing: 1em;
    font-size: 330%;
    text-transform: uppercase;
  }

  .title {
    -webkit-animation: color-change 10s infinite;
    -moz-animation: color-change 10s infinite;
    -o-animation: color-change 10s infinite;
    -ms-animation: color-change 10s infinite;
    animation: color-change 10s infinite;
  }

  @-webkit-keyframes color-change {
    0% {
      color: red;
    }
    50% {
      color: pink;
    }
    100% {
      color: red;
    }
  }
  @-moz-keyframes color-change {
    0% {
      color: red;
    }
    50% {
      color: pink;
    }
    100% {
      color: red;
    }
  }
  @-ms-keyframes color-change {
    0% {
      color: red;
    }
    50% {
      color: pink;
    }
    100% {
      color: red;
    }
  }
  @-o-keyframes color-change {
    0% {
      color: red;
    }
    50% {
      color: pink;
    }
    100% {
      color: red;
    }
  }
  @keyframes color-change {
    0% {
      color: red;
    }
    50% {
      color: pink;
    }
    100% {
      color: red;
    }
  }

  .instagramLink {
    font-size: 230%;
    text-transform: lowercase;
    color: #808080;
    font-family: "Roboto Condensed", sans-serif;
  }

  .instagramLink,
  .seeGallery {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .seeGallery {
    font-size: 80px;
    color: red;
  }

  .title:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }

  //CSS3 Bounce Animation
  @-webkit-keyframes bounce {
    0%,
    100% {
      -webkit-transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-10px);
    }
  }
  @-moz-keyframes bounce {
    0%,
    100% {
      -moz-transform: translateY(0);
    }
    50% {
      -moz-transform: translateY(-10px);
    }
  }
  @-o-keyframes bounce {
    0%,
    100% {
      -o-transform: translateY(0);
    }
    50% {
      -o-transform: translateY(-10px);
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .seeGallery:hover {
    animation: bounce 2.5s infinite; //other browsers
    -webkit-animation: bounce 2.5s infinite; //webkit browsers
    -moz-animation: bounce 2.5s infinite; //firefox
    -o-animation: bounce 2.5s infinite; //opera
  }

  /*PAGE TWO*/

  .pageTwo {
    height: 100vh;
    width: 100vw;
    width: 100%;
  }

  @media only screen and (max-width: 1144px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.7em;
      font-size: 300%;
      text-transform: uppercase;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.7em;
      font-size: 200%;
      text-transform: uppercase;
    }

    .instagramLink {
      font-size: 150%;
    }

    .seeGallery {
      font-size: 170%;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.7em;
      font-size: 170%;
      text-transform: uppercase;
    }

    .instagramLink {
      font-size: 140%;
    }

    .seeGallery {
      font-size: 160%;
    }
  }

  @media only screen and (max-width: 500px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.5em;
      font-size: 160%;
      text-transform: uppercase;
    }

    .instagramLink {
      font-size: 130%;
    }

    .seeGallery {
      font-size: 150%;
    }
  }

  @media only screen and (max-width: 400px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.7em;
      font-size: 120%;
      text-transform: uppercase;
    }

    .instagramLink {
      font-size: 110%;
      border: 10px solid black;
    }

    .seeGallery {
      font-size: 150%;
    }
  }

  @media only screen and (max-width: 380px) {
    .title {
      font-family: "Fugaz One", cursive;
      letter-spacing: 0.7em;
      font-size: 120%;
      text-transform: uppercase;
    }

    .instagramLink {
      font-size: 110%;
    }

    .seeGallery {
      font-size: 150%;
    }
  }
`;

function Home() {
  return (
    <Styles>
      <div className="pageOne">
        <div className="pageOneContent">
          <div className="title">Trulyblessed</div>
          <div className="email"></div>
          <div className="instagramLink">
            <p>
              DM me on instagram or email trulyblessedapparel1@gmail.com for
              custom pieces,
              <br />
              <a
                href="https://instagram.com/trulyblessedapparel?igshid=lyc9v1wakska"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <div>
                or contact me at my personal instagram,
                <br />
                <a href="https://www.instagram.com/itisandyy/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
              <div>see the gallery bellow</div>
            </p>
          </div>

          <div className="seeGallery">
            <a href="#p2">
              <FaRegArrowAltCircleDown />
            </a>
          </div>
        </div>
      </div>

      <div className="pageTwo" id="p2">
        <Carousel />
      </div>
    </Styles>
  );
}

export default Home;
