import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <div>
      <h1 onClick={this.click}>Ihan hyvä äppi se varmaan on</h1>
    </div>
  }

  click = () => {
    console.log('clikki tapahtui')
  }
}
export default Greeting;