import React, { Component } from 'react';

export default class DataContainer extends Component {
  state = {
    data: null
  };


}

componentDidMount = () => {
  let url = `https://randomuser.me/api/?page=1&results=5&nat=fr` // &seed=abc
  console.log(url);

  Axios.get(url)
    .then(response => this.setState({ data: response.data })
    )
    .catch(error => console.log(error)
    )
}
render = () => { 
  const {data} = this.state;
  return {...data}
}