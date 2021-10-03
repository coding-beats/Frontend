import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateMusicForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateMusic} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='note' placeholder="Enter Your Note" defaultValue={this.props.musicInfo.note} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Update! ✔
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateMusicForm