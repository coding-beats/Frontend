import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SongExplorer from '../SongExplorer'
import MusicForm from '../MusicForm.js';
import ListOfMusicRender from '../ListOfMusicRender.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Loader from "../LoadingScreen"
import {If,Then,Else} from "react-if"

class Music extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
      songResult: {},
      songListResult: {},
      searchQuery: '',
      showSongInfo: false,
      showError: false,
      showUpdateForm: false,
      showTop20: false,
      showLoder: false
    }
  }

  componentDidMount = async () => {

    this.getSongListFun();
  }

  // search
  getSongFun = async (event) => {
    event.preventDefault();
    try {
      await this.setState({
        searchQuery: event.target.song.value,
        showLoder: true
      })

      let reqUrl = `http://localhost:3001/getMusicSearch?song=${this.state.searchQuery}`;

      let sResult = await axios.get(reqUrl);
      this.setState({
        songResult: sResult.data,
        showSongInfo: true,
        showLoder: false
      })
    }

    catch {
      this.setState({
        showError: true,
        showSongInfo: false
      })
    }
  }

  getSongListFun = async () => {
    try {

      let reqUrl = `http://localhost:3001/getMusicList?songID=554591360`;

      let sResult = await axios.get(reqUrl);
      // console.log("sResult",sResult.data);
      this.setState({
        songListResult: sResult.data,
        showTop20: true
      })
      // console.log(this.state.showTop20);
      // console.log("songListResult", this.state.songListResult);
    }

    catch {
      this.setState({
        showError: true,
        showTop20: false
      })
    }
  }

  // add music function
  createMusic = async (e, songResult) => {
    e.preventDefault()
    // console.log(songResult);
    let musicFormInfo = await {
      img1: songResult.img? songResult.img : songResult[0].img,
      title1: songResult.title? songResult.title : songResult[0].title,
      artist1: songResult.artist? songResult.artist : songResult[0].artist,
      note1: e.target.note.value,
      songUrl1: songResult.songURL? songResult.songURL : songResult[0].songURL,
      email1: this.props.auth0.user.email
    }
    // console.log("musicFormInfo", musicFormInfo);

    let createData = await axios.post(`${process.env.REACT_APP_SERVER}/createMusic`, musicFormInfo);

    this.setState({
      musicData: createData.data
    })

  }
  render() {
    return (
      <div style={{ textAlign:"center" , position: "relative",bottom:"200px" }}>
         <section style={{backgroundSize:"cover" ,backgroundRepeat:"no-repeat",backgroundImage: "url(https://wallpaperaccess.com/full/2502641.jpg)", height:"700px", paddingBottom:"0%"}}  >
        <Form onSubmit={this.getSongFun}>
          <Form.Group style={{paddingTop:"23%",display:"inline-block",position:"relative",right:"150px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Control style={{ height:"40px", width:"350px", marginLeft:"40.5%", marginBottom:"25px", marginTop:"25px", boxShadow: "10px 10px 5px grey"}} type="text" name='song' placeholder="Enter Song Name" />
          </Form.Group>
          <Button style={{position:"relative",left:"1px",borderRadius: "16px",backgroundColor: "black" , boxShadow: "10px 10px 5px grey",height:"40px" }} variant="primary" type="submit">
            Search! 🔍
          </Button>
        </Form>
        </section>
       <If condition={this.state.showLoder}>
         <Then>
         <Loader/>
         </Then>
         <Else>

         
        < h1 style ={{color:"black",position:"relative", top:"30px",fontFamily:"cursive", marginBottom:"30px", textAlign:"center" , textDecoration:"underline solid pink 5px"}}>Top 20 Songs
        <br/> <br/> 
        </h1>
        {this.state.showSongInfo &&
          <div style={{marginLeft:"35%" , marginRight:"15%"}}>
            <Card style={{ maxWidth: "50%", maxHeight: "38rem", margin: "2rem", textAlign:"center", boxShadow:" 10px 10px 5px grey"}}>
              <Card.Body>
                <Card.Text>
                  {this.state.songResult.map(info => {
                    return (
                      <SongExplorer songResult={info} />
                    )
                  })}

                  {/* add music functions from serch bar */}
                  <MusicForm songResult={this.state.songResult} createMusicFun={this.createMusic} />
                  {/* show list */}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        }
        </Else>
       </If>
        {this.state.showTop20 &&
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
            {
              this.state.songListResult.map(info => {
                return (
                  <>
                    <ListOfMusicRender songListResult={info} 
                    createMusicFun={this.createMusic}/>
                  </>
                )
              })}
          </div>}

        {this.state.showError &&
          <div>
            <p>Error 404 page not found </p>
            <img src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="404 Error" />
          </div>
        }

      </div>
    );
  }
}

export default withAuth0(Music);
