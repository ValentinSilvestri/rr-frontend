import React, { Component } from 'react';
import './App.css';
import Boilers from './components/Boilers';
import boilers from './data/boilers.json';
import Aside from './components/Aside';
import Header from './components/Header';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  state = {boilers};

  deleteBoiler = (id) => {
    this.setState({boilers: [...this.state.boilers.filter(boiler => boiler.id !== id)] })
  }

  render() {
    return (
      <div style = {{ display: 'flex'}}>
        <Aside />
        <div style = {{ display: 'flex', flexDirection: 'column', flex: '80%', float: 'right'}}>
          <div>
            <Header />
            <Boilers boilers={this.state.boilers} />
          </div>
        </div>
        <UpdateForm />
      </div>
    );
  }
}

export default App;
