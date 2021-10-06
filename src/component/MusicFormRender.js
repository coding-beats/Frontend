import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withAlert } from 'react-alert'

class AddMusicForm extends Component {

    render() {
        const alert = this.props.alert;
        return (
            <>

                <Form onSubmit={(e) => { this.props.createMusicFun(e, this.props.songResult) }}>
                    <Button style={{ position:"relative",width:"150px", right:"80px", bottom:"73px",backgroundColor: "#e89d9e" , borderRadius: "16px", color: "black"}} variant="primary" type="submit" onClick={() => {
                        alert.success('Song Added To List')
                    }}>
                     Fav List! ❤
                    </Button>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control style={{position:"relative" , bottom:"38px"}} type="text" name='note' placeholder="Enter Music note" />
                    </Form.Group>


                </Form>

            </>
        )
    }
}

export default withAlert()(AddMusicForm)