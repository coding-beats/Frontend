
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class MusicRender extends Component {

    deleteMusicHandler = () => {
        this.props.deleteMusicFun(this.props.id)
    }
    updateMusicHandler = () => {
        this.props.showUpdateMusicForm(this.props.musicData)
    }

    render() {
        return (
            <div key={this.props.idx}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Music Info</Card.Title>
                        <Card.Text>Title: {this.props.musicData.title}</Card.Text>
                        <Card.Text>Artisit: {this.props.musicData.artist}</Card.Text>
                        <Card.Text>Note: {this.props.musicData.note}</Card.Text>
                        <Card.Text>SongUrl: {this.props.musicData.songUrl}</Card.Text>
                        <Button onClick={this.deleteMusicHandler}>
                            Remove the song! ❌
                        </Button>
                        <Button onClick={this.updateMusicHandler}>
                            Update Your Note! ✍️
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MusicRender