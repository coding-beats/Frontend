import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withAlert } from 'react-alert'

class AddMusicForm extends Component {

    render() {
        const alert = this.props.alert;
        return (
            <>
                <br />
                <Form onSubmit={(e) => { this.props.createMusicFun(e, this.props.songResult) }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='note' placeholder="Enter Music note" />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={() => {
                         alert.success('Song Added To List')
                    }}>
                        ADD To Fav List! ❤
                    </Button>
                </Form>
                <br />
            </>
        )
    }
}

export default withAlert()(AddMusicForm)