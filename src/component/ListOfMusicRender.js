import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicForm from './MusicForm'

class SongListRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ maxWidth: "21rem", height: "35rem", margin: "1rem" , boxShadow: "10px 10px 5px grey", width:"350px"}}>
                    <Card.Img class="image" variant="top" src={this.props.songListResult.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }} />
                    <Card.Body>
                        <Card.Text class="text">
                            <section style={{height:"150px", marginBottom:"5px"}}>
                            <p class="text">Title: {this.props.songListResult.title}</p>
                            <p class="text"> Artist: {this.props.songListResult.artist}</p>
                            </section>
                            <Button style={{width:"150px" ,position:"relative",left:"78px",bottom:"29px", borderRadius: "16px",backgroundColor: "#4acacf",color: "black", margin:"7px"}} variant="primary" type="submit" href={this.props.songListResult.songURL}>
                                Listen ♬
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