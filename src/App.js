import React, { Component } from 'react';
import './App.css';
import Boilers from './components/Boilers';

class App extends Component {
  state = {
    boilers: [
    {     
      id: 1,
      description: 'Boiler 10.000Kcal/h',
      boilerType: 'A',
      hourMaintenanceCost: 150,
      hourEventualCost: 225,
      maintenanceRate: 30
    },
    {     
      id: 2,
      description: 'Boiler 10.000Kcal/h',
      boilerType: 'B',
      hourMaintenanceCost: 110,
      hourEventualCost: 190,
      maintenanceRate: 20
    },
    {     
      id: 3,
      description: 'Boiler 20.000Kcal/h',
      boilerType: 'A',
      hourMaintenanceCost: 200,
      hourEventualCost: 275,
      maintenanceRate: 20
    },
    {     
      id: 4,
      description: 'Boiler 20.000Kcal/h',
      boilerType: 'B',
      hourMaintenanceCost: 150,
      hourEventualCost: 200,
      maintenanceRate: 15
    },
    {     
      id: 5,
      description: 'Boiler 50.000Kcal/h',
      boilerType: 'C',
      hourMaintenanceCost: 450,
      hourEventualCost: 700,
      maintenanceRate: 45
    }
    ]
  }
  render() {
    return (
      <div>
        <h1 style = {{background: '#ff4000', color: '#ffffff', margin: '0px', padding: '25px'}} >Boilers</h1>
        <Boilers boilers={this.state.boilers} />
      </div>
    );
  }
}

export default App;
