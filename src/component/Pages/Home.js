/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Home.css";
import CardItem from "../CardItem";
// import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img src="/videos/1.jpg" />
          <h1>Music&beats</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <Button
              className="btns"
              path="/Music"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </div>
        </div>

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
          <img src="/videos/1.jpg" />
        </div>

        <div className="cards">
          <h1>most listened!</h1>
          <div className="cards__container1">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/Adham.jfif"
                  label="scared"
                  path="/Music"
                />
                <CardItem
                  src="images/Adham.jfif"
                  label="scared"
                  path="/Music"
                />
                <CardItem
                  src="images/Adham.jfif"
                  label="scared"
                  path="/Music"
                />
              </ul>
            </div>
            
          </div>
        </div>

        <div className="hero-container1">
          <img src="/videos/1.jpg" />
        </div>

        <div className="cards">
          <h1>most listened!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <Card style={{ width: "25rem" , height: "25rem", transition: "" }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example text to build on the card title and
                      make up the bulk of the card's content.Some quick example text to build on the card title and
                      make up the bulk of the card's content.Some quick example text to build on the card title and
                      make up the bulk of the card's content.Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
