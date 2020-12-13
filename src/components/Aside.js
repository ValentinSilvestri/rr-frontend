import React from 'react';

export default function Aside() {
    return (
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
    )
}
