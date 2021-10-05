import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
class SongExplorerRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ maxWidth: "20rem", maxHeight: "38rem", margin: "2rem"}}>
                <Card.Img variant="top" src={this.props.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }}/>
                    <Card.Body>
                        <Card.Title>Song info</Card.Title>
                        <Card.Text>
                            <p>Title: {this.props.title}</p>
                            <p>Artist: {this.props.artist}</p>
                            <Button variant="primary" type="submit" href={this.props.songURL}>
                                Click To Listen ♬
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default SongExplorerRender