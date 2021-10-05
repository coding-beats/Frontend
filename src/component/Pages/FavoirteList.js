import React from "react";
import { Card } from "react-bootstrap";
import Music from '../Music.js';
import UpdateMusicForm from '../UpdateMusicForm.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

class FavoirteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
      searchQuery: '',
      showModal: false,
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

    let musicFormUpdateInfo = {
      img: this.state.musicInfoUpdate.img,
      title: this.state.musicInfoUpdate.title,
      artist: this.state.musicInfoUpdate.artist,
      note: e.target.note.value,
      songUrl: this.state.musicInfoUpdate.songUrl,
      email: this.props.auth0.user.email,
      id: this.state.musicInfoUpdate._id
    }
    // console.log("musicFormUpdateInfo", musicFormUpdateInfo);
    let updateData = await axios.put(`${process.env.REACT_APP_SERVER}/updateMusic`, musicFormUpdateInfo);
    // console.log("updateData", updateData.data);
    this.setState({
      musicData: updateData.data
    })
  }

  showUpdateMusicForm = async (musicInfo) => {

    await this.setState({
      showModal: true,
      musicInfoUpdate: musicInfo
    })

  }

  // for the update form
  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      < div >
        {isAuthenticated && (
          <>
            <img src={user.picture} alt={`${user.name}`}/>
            <div>Hello {user.name}</div>
            <div>{user.email}</div>
          </>
        )}
        <h1>Favoirte List</h1>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
              {/* get and delete functions */}
              {this.state.musicData.map((element, index) => {
                return (
                  <Music musicData={element}
                    index={index}
                    deleteMusicFun={this.deleteMusic}
                    showUpdateMusicForm={this.showUpdateMusicForm} />
                )
              })}
              {/* update form */}
              {this.state.showModal &&
                <UpdateMusicForm
                  musicInfo={this.state.musicInfoUpdate}
                  updateMusic={this.updateMusic}
                  closeModal={this.closeModal}
                  showModal={this.state.showModal}/>}
        </div>
      </div >
    );
  }
}

export default withAuth0(FavoirteList);
