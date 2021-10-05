/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import CardItem from "../CardItem";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "images/Hip-Hop1.png",
  "images/Adham_1.jpg",
  "images/Rihanna.gif",
  "images/Adham.jfif",
  "images/EDM.png",
];

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img className="img1" src="/videos/1.jpg" />
          <h1>Music&beats</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <Button
              className="btns"
              href="/Music"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="cards">
          <h1>Kinds of songs we offer!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/Pop.jpg"
                  text="Pop is one of the most popular music genres within the younger generations, but it’s still often loved among older generations too."
                  label="Pop"
                  path="/Music"
                />
                <CardItem
                  src="images/Classical.png"
                  text="Classical music is one of the oldest types of music in existence, dating back to as early as the 5th century."
                  label="Classical"
                  path="/Music"
                />
                <CardItem
                  src="images/Hip-Hop.png"
                  text="Hip-hop or rap music has distinctive rhythmic beats that are more defined on the bass line."
                  label="Hip-Hop and Rap"
                  path="/Music"
                />
                <CardItem
                  src="images/EDM.png"
                  text="Is a broad range of percussive electronic music genres made festivals."
                  label="EDM"
                  path="/Music"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/Country.png"
                  text="It combines the cowboy music of the west with the folk music of the southeast."
                  label="Country"
                  path="/Music"
                />
                <CardItem
                  src="images/Metal.png"
                  text="metal music is characterized by heavy sounds and the domination of electric and bass guitars."
                  label="Metal"
                  path="/Music"
                />
                <CardItem
                  src="images/Folk.png"
                  text="Folk is a term used to describe traditional music originating from a specific region among local people in non-professional settings."
                  label="Folk"
                  path="/Music"
                />
                <CardItem
                  src="images/Jazz.png"
                  text="Jazz music is defined by syncopated rhythms, polyphonic ensemble playing, improvisation and unique voices."
                  label="Jazz"
                  path="/Music"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-container1">
          <img className="img1" src="/videos/1.jpg" />
        </div>
        <div className="cards1">
          <div>
            <h1 className="divh">most listened!</h1>
            <Slide easing="ease">
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[0]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[1]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[2]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[3]})` }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{ backgroundImage: `url(${slideImages[4]})` }}
                ></div>
              </div>
            </Slide>
          </div>
        </div>

        <div className="hero-container1">
          <img className="img1" src="/videos/1.jpg" />
        </div>

        <div className="cards">
          <div className="Finaldiv">
            <p>
              <h2>Our Vision:</h2> 
              This application helps people to listen to their favorite songs and see the most listened to songs in an easy and fast way. The application provides them with many advantages, including listening to songs, adding comments, adding songs to favorites, and deleting songs from them.
            </p>
                <div style={{ backgroundImage: `url(https://images-ext-1.discordapp.net/external/rsAinBEvXxiQdBAi9s3NduWjbkVxe2Gaf9X_5yibRTQ/https/wallpaperaccess.com/full/3634688.jpg?width=1050&height=670)` }}></div>
              </div>
        </div>
      </>
    );
  }
}

export default Home;
