import React, { Component } from 'react';
import Boilers from './components/Boilers';
import boilers from './data/boilers.json';
import Aside from './components/Aside';
import Header from './components/Header';
import UpdateForm from './components/UpdateForm';
import './css/App.css';

class App extends Component {
  state = {boilers};

  deleteBoiler = (id) => {
    this.setState({boilers: [...this.state.boilers.filter(boiler => boiler.id !== id)] });
  }

  render() {
    return (
      <div id = 'div1'>
        <Aside />
        <div id = 'div2'>
          <div id = 'div3'>
            <Header />
            <Boilers boilers={this.state.boilers} deleteBoiler={this.deleteBoiler} />
          </div>
        </div>
        <UpdateForm />
      </div>
    );
  }
}

export default App;
