import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./App.css";
import img from "/src/assets/search.png";
import imgs from "/src/assets/img.png";
import imgsa from "/src/assets/imgsa.png";
import hart from "/src/assets/hart.png";
import card from "./assets/card.png";
import cart1 from "./assets/chart1.png";
import folwers from "./assets/flowers.png";
import Ellipse from "./assets/Ellipse.png";
import hars from "./assets/hars.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <p className="text">NFters</p>
          <ul>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Resource</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="search-buttonline">
            <div className="serching">
              <input id="serchings" type="search" placeholder="Search" />
              <a className="hoot" href="#">
                <img src={img} alt="" />
              </a>
            </div>
            <button id="btn-upload">Upload</button>
            <button id="btn-contend">Connect Wallet</button>
          </div>
        </nav>
        <hr className="hr" />
        <section className="Name-date">
          <div>
            <p className="text-ls">Discover, and collect Digital Art NFTs</p>
            <p className="text-sl">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div className="explore">
              <Box
                sx={{
                  "& button": {
                    marginTop: 4,
                    borderRadius: 30,
                    background: "#3D00B7",
                  },
                }}
              >
                <Button className="btn-ls" variant="contained" size="large">
                  Explore Now
                </Button>
              </Box>
            </div>
            <div className="artworking">
              <div>
                <p className="text-lg">98k+</p>
                <p className="text-mp">Artwork</p>
              </div>
              <div>
                <p className="text-lg">12k+</p>
                <p className="text-mp">Auction</p>
              </div>
              <div>
                <p className="text-lg">15k+</p>
                <p className="text-mp">Artist</p>
              </div>
            </div>
          </div>
          <div className="container">
            <img className="imga-2" src={imgsa} alt="" />
            <img className="imga-3" src={imgs} alt="" />
            <img className="imga-1" src={hart} alt="" />
          </div>
        </section>
      </header>
      <section className="Amazing">
        <div>
          <p className="text-ops">The amazing NFT art of the world here</p>
        </div>
        <div>
          <div className="reels">
            <img src={card} alt="" />
            <a className="selec" href="#">
              Fast Transaction
            </a>
          </div>
          <p className="lozem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </div>
        <div>
          <div className="reels">
            <img src={cart1} alt="" />
            <a className="selec" href="#">
              Growth Transaction
            </a>
          </div>
          <p className="lozem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </div>
      </section>
      <section className="map-foot">
        <div>
          <div className="roost">
            <div>
              <img src={folwers} alt="" />
            </div>
          </div>
          <div className="screns">
            <div className="flexs">
              <img src={Ellipse} alt="" />
              <div>
                <p className="text-a">The Futr Abstr</p>
                <p className="text-pe">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-sam">Highest Bid</p>
              <p className="like">
                {" "}
                <img src={hars} alt="" /> 0.25 ETH
              </p>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </>
  );
}

export default App;
