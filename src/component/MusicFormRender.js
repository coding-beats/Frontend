import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddMusicForm extends Component {
    render() {
        return (
            <>
                <br />
                <Form onSubmit={this.props.createMusicFun}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='title' placeholder="Enter Music Title" />
                        <Form.Control type="text" name='artist' placeholder="Enter Auther Name" />
                        <Form.Control type="text" name='note' placeholder="Enter Music note" />
                        <Form.Control type="text" name='status' placeholder="Enter Your Status" />
                    </Form.Group>
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