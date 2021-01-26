import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

export default function FlagItem({ flag: {name, flag}}) {

    return (
        <div>
            {
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                </Card.Body>
              </Card>
            }
        </div>
    )
}
