import React from 'react';
import '../css/Aside.css';

export default function Aside() {
    return (
        <aside>
          <div id = 'asideDiv1'>
            <h3 id = 'asideTitle'>CaldAR</h3>
          </div>
          <div id = 'asideDiv2'>
            <ol>
              <h4>
                <li>
                  <a href="/#">Buildings</a>
                </li>
                <li>
                  <a href="/#">Companies</a>
                </li>
                <li>
                  <a href="/#">Boilers</a>
                </li>
                <li>
                  <a href="/#">Boiler Types</a>
                </li>
                <li>
                  <a href="/#">Technicians</a>
                </li>
                <li>
                  <a href="/#">Appointments</a>
                </li>
                <li>
                  <a href="/#">Settigns</a>
                </li>
              </h4>
            </ol>
          </div>
        </aside>
    )
}
