import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Home.css';

class Login extends React.Component {
  render() {
    return(
      <>
      <h1>Home Page</h1>
      <Card style={{ width: '18rem', marginBottom: '25px', marginTop: '50px' }}>
        <Card.Body>
          <Card.Title>HomePage</Card.Title>
          <Card.Text>
            Click Below to HomePage
          </Card.Text>
        </Card.Body>
        <Card.Text>
          Click Below to HomePage
        </Card.Text>
      </Card>
        <Card style={{ width: '18rem', marginBottom: '25px' }}>
          <Card.Body>
            <Card.Title>HomePage</Card.Title>
            <Card.Text>
              Click Below to HomePage
            </Card.Text>
          </Card.Body>
          <Card.Text>
            Click Below to HomePage
          </Card.Text>
        </Card>
        <Card style={{ width: '18rem', marginBottom: '25px' }}>
          <Card.Body>
            <Card.Title>HomePage</Card.Title>
            <Card.Text>
              Click Below to HomePage
            </Card.Text>
          </Card.Body>
          <Card.Text>
            Click Below to HomePage
          </Card.Text>
        </Card>
        <Card style={{ width: '18rem', marginBottom: '25px' }}>
          <Card.Body>
            <Card.Title>HomePage</Card.Title>
            <Card.Text>
              Click Below to HomePage
            </Card.Text>
          </Card.Body>
          <Card.Text>
            Click Below to HomePage
          </Card.Text>
        </Card>
        </>
    )
  }
}

export default Login;
