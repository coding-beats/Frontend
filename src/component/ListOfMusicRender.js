import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicForm from './MusicForm'

class SongListRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ maxWidth: "20rem", maxHeight: "38rem", margin: "2rem" }}>
                    <Card.Img variant="top" src={this.props.songListResult.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }} />
                    <Card.Body>
                        <Card.Title>Song info</Card.Title>
                        <Card.Text>
                            <p>Title: {this.props.songListResult.title}</p>
                            <p>Artist: {this.props.songListResult.artist}</p>
                            <Button variant="primary" type="submit" href={this.props.songListResult.songURL}>
                                Click To Listen ♬
                            </Button>
                            {/* songResult={this.state.songResult}  */}
                            <MusicForm songListResult={this.props.songListResult} createMusicFun={this.props.createMusicFun} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default SongListRender