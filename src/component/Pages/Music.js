import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SongExplorer from '../SongExplorer'

class Music extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songResult: {},
      searchQuery: '',
      showSongInfo: false,
      showError: false
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
      console.log(sResult.data);
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
            <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>song info</Card.Title>
                <Card.Text>
                {this.state.songResult.map(info => {
                    return (
                      <SongExplorer songResult={info} />
                    )
                  })}
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

export default Music;
