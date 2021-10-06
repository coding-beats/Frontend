import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MusicRender.css'

class MusicRender extends Component {

    deleteMusicHandler = () => {
        this.props.deleteMusciFun(this.props.id)
    }
    updateMusicHandler = () => {
        this.props.showUpdateMusicForm(this.props.musicData)
    }

    render() {
        return (

            <div key={this.props.idx}>
                <Card style={{ maxWidth: "20rem", maxHeight: "38rem", margin: "2rem"}}>
                <Card.Img variant="top" src={this.props.musicData.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem"}}/>
                    <Card.Body>
                        <Card.Title>Music Info</Card.Title>
                        <Card.Text >Title: {this.props.musicData.title}</Card.Text>
                        <Card.Text>Artisit: {this.props.musicData.artist}</Card.Text>
                        <Card.Text>Note: {this.props.musicData.note}</Card.Text>
                        <Card.Text class="buttons">
                            <Button variant="primary" type="submit" href={this.props.musicData.songUrl}>
                                Click To Listen ♬
                            </Button>
                        </Card.Text>
                        <Card.Text class="buttons">
                            <Button onClick={this.deleteMusicHandler} >
                                Remove the song! ❌
                            </Button>
                        </Card.Text>
                        <Card.Text class="buttons">
                            <Button onClick={this.updateMusicHandler} >
                                Update Your Note! ✍️
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MusicRender