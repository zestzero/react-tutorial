import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {a:''}
  }
  update(){
    this.setState(
      { a: this.refs.a.value, b: this.refs.b.value}
    )
  }
  render(){
    return (
      <div>
        <input ref="a" type="text" onChange={this.update.bind(this)}/>
        {this.state.a}
        <hr />
        <input ref="b" type="text" onChange={this.update.bind(this)}/>
        {this.state.b}
      </div>
    )
  }
}

export default App;
