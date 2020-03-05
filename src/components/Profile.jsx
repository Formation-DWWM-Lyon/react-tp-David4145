import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Profile = ({ name, street, email, picture, gender }) =>
  <Card>
    <Card.Header as="h3">
      <Card.Title>
        {name}
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle></Card.Subtitle>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item>{street}</ListGroup.Item>
      <ListGroup.Item>{email}</ListGroup.Item>
      <ListGroup.Item>{picture}</ListGroup.Item>
      <ListGroup.Item>{gender}</ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">

      </small>
    </Card.Footer>
  </Card>



export default Profile;
