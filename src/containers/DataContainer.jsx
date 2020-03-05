import React, { Component } from 'react';
import Axios from 'axios';
import { ListGroup } from 'react-bootstrap';

export default class DataContainer extends Component {
  state = {
    data: null
  }
  componentDidMount = () => {
    const url = `https://randomuser.me/api/?page=1&results=10&seeda4accc8af17f6b1c&nat=fr`;

    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data });
        console.log(response.data);
      })
      .catch(error => console.log(error));

      return this.response.data;

  }

  render = () => {
this.componentDidMount();
   
    return (
      <ListGroup>
        {this.data.results.map()}
      </ListGroup>
    )
  }
}
