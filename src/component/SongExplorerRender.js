import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
class SongExplorerRender extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100%' }}>
                <Card.Img  variant="top" src={this.props.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }}/>
                    <Card.Body>
                        {/* <Card.Title>Song info</Card.Title> */}
                        <Card.Text class="text">
                            <p>Title: {this.props.title}</p>
                            <p>Artist: {this.props.artist}</p>
                            <br/>
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