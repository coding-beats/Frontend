/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AboutUs.css";
import Yasmeen from "../../Images/Yasmeen.png";
import Haneen from "../../Images/Haneen.png";
import Hussein from "../../Images/Hussein.jpg";
import Ahmad from "../../Images/Ahmad.png";
import Morad from "../../Images/Morad.png";
import Ziyad from "../../Images/Ziyad.jpg";

class AboutUs extends React.Component {
  render() {
    return (


      <div class="aboutUsPage">
        <img style={{ backgroundSize: "cover", width: "100%" }} src="https://cutewallpaper.org/21/4k-music-wallpaper/Music-Headphones-Hd-Wallpaper-for-Desktop-and-Mobiles-4K-.jpg" />


        <a style={{ scrollBehavior: "smooth", position: "relative", bottom: "830px", right: "-600px" }} href="#container"><button class="bubbly-button" type="button">Meet us down</button></a>

        <div id="container">
          <h1 style={{ color: "black", fontFamily: "cursive" }}> Our Team </h1>
          <hr />
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Yasmeen})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Yasmeen Al-Kelani</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p>Web developer and Software engineer</p>
              <span>Social media </span>
              <div className="icons">
                <a href="https://github.com/YasmeenKelani">
                  <svg
                    className="icon"
                    xmlns="https://github.com/YasmeenKelani"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Haneen})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Haneen Jaradeh</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p>Web developer and Software engineer</p>
              <span>Social media </span>
              <div className="icons">
                <a href="https://github.com/haneen-izz">
                  <svg
                    className="icon"
                    xmlns="https://github.com/haneen-izz"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Hussein})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Hussein Al-Karmi</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p>Web developer and Software engineer</p>
              <span>Social media </span>
              <div className="icons">
                <a href="https://github.com/HusseinAlkarmi">
                  <svg
                    className="icon"
                    xmlns="https://github.com/HusseinAlkarmi"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Ziyad})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Ziyad Haitham Saleh</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p> Web developer and Software engineer</p>
              <span>Social media </span>
              <div className="icons">
                <a href="https://github.com/Ziyadhs">
                  <svg
                    className="icon"
                    xmlns="https://github.com/Ziyadhs"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Ahmad})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Ahmad Abu-Laban</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p>Web developer and Software engineer</p>
              <span>Social media </span>
              <div className="icons">
                <a href="https://github.com/Ahmad-Abulaban?tab=repositories">
                  <svg
                    className="icon"
                    xmlns="https://github.com/Ahmad-Abulaban?tab=repositories"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="front">
              <div
                className="contact"
                style={{
                  backgroundImage: `url(${Morad})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }} />

              <span className="name">Morad Abu-Arqoub</span>
              <hr />
              <span className="job"> Web developer </span>
            </div>
            <div className="back">
              <span>Skills:</span>
              <p> Web developer and Software engineer</p>
              <span>Social media </span>

              <div className="icons">
                <a href="https://github.com/MuradAbuArqoub">
                  <svg
                    className="icon"
                    xmlns="https://github.com/MuradAbuArqoub"
                    id="github-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default AboutUs;