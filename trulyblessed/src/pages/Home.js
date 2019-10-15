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
    font-size: 300%;
    text-transform: uppercase;
  }

  .instagramLink {
    font-size: 200%;
  }

  .seeGallery {
    font-size: 300%;
  }

  /*PAGE TWO*/

  .pageTwo {
    height: 100vh;
    width: 100vw;
    width: 100%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
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
              us on instagram or email trulyblessedapparel1@gmail.com for custom
              pieces,
              <br />
              <a
                href="https://instagram.com/trulyblessedapparel?igshid=lyc9v1wakska"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <div>
                or contact me at my personal instagram
                <br />
                <a href="https://www.instagram.com/itisandyy/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
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
