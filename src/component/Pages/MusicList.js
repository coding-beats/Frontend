import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SongExplorer from '../SongExplorer'
import MusicForm from '../MusicForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

class Music extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
      songResult: {},
      searchQuery: '',
      showSongInfo: false,
      showError: false,
      showUpdateForm: false,
    }
  }

  getSongFun = async (event) => {
    event.preventDefault();
    try {
      await this.setState({
        searchQuery: event.target.song.value
      })

      let reqUrl = `http://localhost:3001/getMusicList?song=${this.state.searchQuery}`;

      let sResult = await axios.get(reqUrl);
      this.setState({
        songResult: sResult.data,
        showSongInfo: true
      })
    }
    
    catch {
      this.setState({
        showError: true,
        showSongInfo: false
      })
    }
  }
  // add music function
  createMusic = async (e, songResult) => {
    e.preventDefault()
      
    let musicFormInfo = await {
      title1: songResult[0].title,
      artist1: songResult[0].artist,
      note1: e.target.note.value,
      songUrl1: songResult[0].songURL,
      email1: this.props.auth0.user.email
    }
    console.log("musicFormInfo",musicFormInfo);

    let createData = await axios.post(`${process.env.REACT_APP_SERVER}/createMusic`, musicFormInfo);

    this.setState({
      musicData: createData.data
    })

  }

  render() {
    return (
      <div>

        <br />
        <Form onSubmit={this.getSongFun}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name='song' placeholder="Enter Song Name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search! 🔍
          </Button>
        </Form>
        <br />

        {this.state.showSongInfo &&
          <div>
            <Card style={{ width: '40%' }}>
              <Card.Body>
                <Card.Title>song info</Card.Title>
                <Card.Text>
                  <br />
                  {this.state.songResult.map(info => {
                    return (
                      <SongExplorer songResult={info} />
                    )
                  })}
                  <br />
                  {/* add music functions */}
                  <MusicForm songResult={this.state.songResult} createMusicFun={this.createMusic} />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        }

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
