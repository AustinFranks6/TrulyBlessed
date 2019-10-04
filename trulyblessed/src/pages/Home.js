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

  .email {
    font-size: 125%;
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
`;

function Home() {
  return (
    <Styles>
      <div className="pageOne">
        <div className="pageOneContent">
          <div>
            My personal instagram
            <br />
            <a href="https://www.instagram.com/itisandyy/" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className="title">Trulyblessed</div>
          <div className="email"></div>
          <div className="instagramLink">
            <p>
              DM us on instagram or email trulyblessedapparel1@gmail.com for
              custom pieces
              <br />
              <a
                href="https://instagram.com/trulyblessedapparel?igshid=lyc9v1wakska"
                target="_blank"
              >
                <FaInstagram />
              </a>
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
