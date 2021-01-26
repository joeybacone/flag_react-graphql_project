import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
export class Home extends Component {
    render() {
        return (
            <div>
                <Card className="text-center">
  <Card.Body>
    <Card.Title>Looking for flags?</Card.Title>
    <Card.Text>
      We have them all
    </Card.Text>
    <Button variant="primary" href="/flags">View Flags</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default Home
