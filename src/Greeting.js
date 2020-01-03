import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      isLoading: false
    };
  }
  render() {


    return <div>
      <h1>Ihan hyvä äppi se varmaan on</h1>
      <button onClick={this.callApi}>Hae characterin tiedot</button>
      <div>{this.state.isLoading && 'Haetaan...'}</div>
      <div>Name: {this.state.character && this.state.character.name}</div>
      <div>Level: {this.state.character && this.state.character.level}</div>
      <div>Gear:</div>
      <div>{this.state.character && this.state.character.gear.map(item => `Name: ${item.name}, Damage: ${item.damage}, Defence ${item.defence} |`)}</div>
    </div>
  }

  callApi = () => {
    console.log('Kutsutaan APIa')
    fetch('http://tuomas-test.azurewebsites.net/character')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({character: data});
      this.setState({isLoading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false});
    })
  }
}

export default Greeting;