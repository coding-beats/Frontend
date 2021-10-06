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
                <Card style={{ maxWidth: "20rem", maxHeight: "38rem", margin: "2rem" }}>
                <Card.Img class="image" variant="top" src={this.props.musicData.img} style={{ maxWidth: "90%", maxHeight: "15rem", margin: "1rem" }}/>
                    <Card.Body>
                    <section style={{height:"150px", marginBottom:"5px"}}>
                        <Card.Text class="text">Title: {this.props.musicData.title}</Card.Text>

                        <Card.Text class="text">Artisit: {this.props.musicData.artist}</Card.Text>
                        <Card.Text class="text">Note: {this.props.musicData.note}</Card.Text>
                        </section>
                        <Card.Text class="buttons">
                            <Button  style={{fontFamily: 'Times New Roman', width:"130px" ,position:"relative",left:"72px" ,backgroundColor: "#4acacf",color: "black", marginTop:"2px", borderRadius: "16px", bottom:"-7px"}} variant="primary" type="submit" href={this.props.musicData.songUrl}>
                               Listen ♬
                            </Button>
                        </Card.Text>
                        <Card.Text class="buttons">
                            <Button style={{fontFamily: 'Times New Roman',position:"relative",width:"130px", right:"67px", bottom:"57px",backgroundColor: "#e89d9e" , borderRadius: "16px", color: "black"}} onClick={this.deleteMusicHandler} >
                                Remove! ❌
                            </Button>
                        </Card.Text>
                        <Card.Text class="buttons">
                            <Button style={{ fontFamily: 'Times New Roman',position:"relative",width:"270px",left:"3px", bottom:"57px",backgroundColor: "#ced4da" , borderRadius: "16px", color: "black"}} onClick={this.updateMusicHandler} >
                                Update Note! ✍️
                            </Button>
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default MusicRender