import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddMusicForm extends Component {
    render() {
        return (
            <>
                <br />
                <Form onSubmit={(e)=>{this.props.createMusicFun(e, this.props.songResult)}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='note' placeholder="Enter Music note" />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        ADD To Fav List! ❤
                    </Button>
                </Form>
                <br />
            </>
        )
    }
}

export default AddMusicForm