import React, { Component } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import boilers from './data/boilers.json';
import Boilers from './components/Boilers';
import AddBoiler from './components/AddBoiler';
import UpdateBoiler from './components/UpdateBoiler';
import './css/App.css';

class App extends Component {
  state = {boilers};

  deleteBoiler = (id) => {
    this.setState({boilers: [...this.state.boilers.filter(boiler => boiler.id !== id)] });
  }

  updateBoiler = (boilerUpdate) => {
    this.setState({boilers: [...this.state.boilers.map(boiler => {
      if(boiler.id === boilerUpdate.id) {
        boiler = boilerUpdate;
      }
    })]});
  }

  addBoiler = (boiler) => {
    boiler.id = this.state.boilers[this.state.boilers.length - 1].id + 1;
    this.setState({
      boilers:[...this.state.boilers, boiler]
    })
  }

  render() {
    return (
      <div>
        <div id = 'div1'>
          <Aside />
          <div id = 'div2'>
            <div id = 'div3'>
              <Header />
              <Boilers boilers={this.state.boilers} deleteBoiler={this.deleteBoiler} updateBoiler={this.updateBoiler}/>
            </div>
          </div>
        </div>
        <div style = {{ display: 'flex', justifyContent: 'center', margin:'25px'}}>
        <AddBoiler addBoiler={this.addBoiler} />
        <UpdateBoiler updateBoiler={this.updateBoiler} />
        </div>
      </div>
    );
  }
}

export default App;
