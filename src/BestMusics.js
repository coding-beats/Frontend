import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import './BestMusics.css';
import axios from 'axios';
import Music from './component/Music.js';
import MusicForm from './component/MusicForm.js';
import UpdateMusicForm from './component/UpdateMusicForm.js';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteMusic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
      searchQuery: '',
      showUpdateForm: false,
      musicInfoUpdate: {}
    }
  }

  // get music fuction
  componentDidMount = async () => {

    let email = this.props.auth0.user.email

    let musicUrl = `${process.env.REACT_APP_SERVER}/getMusic?email=${email}`;

    let mData = await axios.get(musicUrl);

    this.setState({
      musicData: mData.data
    })
  }

  // create music function
  createMusic = async (e) => {
    e.preventDefault()

    let musicFormInfo = {

      // title: String,
      // artist: String,
      // note: String,
      // songUrl: String, 
      // email: String
      title1: e.target.title.value,
      artist1: e.target.artist.value,
      note1: e.target.note.value,
      songUrl1: e.target.songUrl.value,
      email1: this.props.auth0.user.email
    }

    let createData = await axios.post(`${process.env.REACT_APP_SERVER}/createMusic`, musicFormInfo);

    this.setState({
      musicData: createData.data
    })

  }

  // delete music function
  deleteMusic = async (musicID) => {

    let email = this.props.auth0.user.email

    let deleteData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteMusic?musicID=${musicID}&email=${email}`)

    this.setState({
      musicData: deleteData.data
    })

  }

  // update music function
  updateMusic = async (e) => {
    e.preventDefault();

    // title: String,
    // artist: String,
    // note: String,
    // songUrl: String, 
    // email: String
    let musicFormUpdateInfo = {
      title: e.target.title.value,
      artist: e.target.artist.value,
      note: e.target.note.value,
      songUrl: e.target.songUrl.value,
      email: this.props.auth0.user.email,
      id: this.state.musicInfoUpdate._id
    }

    let updateData = await axios.put(`${process.env.REACT_APP_SERVER}/updateMusic`, musicFormUpdateInfo);

    this.setState({
      musicData: updateData.data
    })
  }

  showUpdateMusicForm = async (musicInfo) => {

    await this.setState({
      showUpdateForm: true,
      musicInfoUpdate: musicInfo
    })

  }

  
  // render
  render() {
    return (
      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title>My Fav Songs</Card.Title>
            <Card.Text>
              {/* add music functions */}
              <MusicForm createMusicFun={this.createMusic} />
              {/* get and delete functions */}
              {this.state.musicData.map((element, index) => {
                return (
                  <Music musicData={element}
                    index={index}
                    deleteMusicFun={this.deleteMusic}
                    showUpdateMusicForm={this.showUpdateMusicForm} />
                )
              })}
              {this.state.showUpdateForm &&
                <UpdateMusicForm
                  musicInfo={this.state.musicInfoUpdate}
                  updateMusic={this.updateMusic}
                />}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withAuth0(MyFavoriteMusic);
