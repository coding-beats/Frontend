import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateMusicForm extends Component {

    render() {
        console.log(this.props.updateMusic)
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateMusic} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name='note' placeholder="Enter Your Note" defaultValue={this.props.musicInfo.note} />
                            </Form.Group>
                            <Button style={{fontFamily: 'Times New Roman',position:"relative",left:"1px", top:"10px",borderRadius: "16px",backgroundColor: "#4acacf" , color:"black"}} variant="primary" type="submit" onSubmit={this.props.updateMusic}>
                                Update! ✔
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{borderRadius: "16px", fontFamily: 'Times New Roman',backgroundColor: "grey"}} variant="secondary" onClick={this.props.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default UpdateMusicForm