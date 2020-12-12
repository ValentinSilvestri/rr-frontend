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
      <div style = {{ display: 'flex'}}>
        <aside style = {{ display: 'flex', flexDirection: 'column', flex: '20%', float: 'left', height: 'auto'}}>
          <div style = {{ backgroundColor:'#00004d'}}>
            <h3 style = {{margin: '0px', padding: '25px', height: '75px', color: '#ffffff' }}>CaldAR</h3>
          </div>
          <div style = {{ backgroundColor:'#000d1a', flexGrow: '1', display: 'flex', alignItems: 'center'}}>
            <ol style = {{ listStyleType: "none" }}>
              <h4>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none' }}>Buildings</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Companies</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Boilers</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Boiler Types</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Technicians</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Appointments</a>
                </li>
                <li style = {{ marginBottom: '10px' }}>
                  <a href="#" style = {{ color: '#ffffff', textDecoration: 'none'}}>Settigns</a>
                </li>
              </h4>
            </ol>
          </div>
        </aside>
        <div style = {{ display: 'flex', flexDirection: 'column', flex: '80%', float: 'right'}}>
          <div>
            <div style = {{background: '#ff4000', display: 'flex', flexDirection: 'row', color: '#ffffff', margin: '0px', padding: '25px', height: '75px'}}>
              <h1 style = {{ float: 'left' }}>Boilers</h1>
              <a href='#' style = {{ position: 'absolute', right: '15px', color: '#ffffff', textDecoration: 'none'}}>Log out</a>
           </div>
           <Boilers boilers={this.state.boilers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
