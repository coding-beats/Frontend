import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicForm from './MusicForm'

class SongListRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ maxWidth: "20rem", height: "38rem", margin: "2rem" }}>
                    <Card.Img class="image" variant="top" src={this.props.songListResult.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }} />
                    <Card.Body>
                        <Card.Text class="text">
                            <p class="text">Title: {this.props.songListResult.title}</p>
                            <p class="text"> Artist: {this.props.songListResult.artist}</p>
                            <Button style={{ backgroundColor: "#555555",color: "white", margin:"7px"}} variant="primary" type="submit" href={this.props.songListResult.songURL}>
                                Click To Listen ♬
                            </Button>
                            {/* songResult={this.state.songResult}  */}
                            <MusicForm songResult={this.props.songListResult} createMusicFun={this.props.createMusicFun} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default SongListRender