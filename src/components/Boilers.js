import React, { Component } from 'react';
import BoilerItem from './BoilerItem';
import propTypes from 'prop-types';
import '../css/Boilers.css';

class Boilers extends Component {
  render() {
    return (
      <div>
        <table>
          <caption>Boilers Records</caption>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Boiler Type</th>
              <th>Hour Maintenance Cost</th>
              <th>Hour Eventual Cost</th>
              <th>Maintenance Rate</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          <tbody>
            {this.props.boilers.map(boiler => <BoilerItem key={boiler.id} boiler={boiler} deleteBoiler={this.props.deleteBoiler}/>)}
          </tbody>
        </table>
      </div>

    );
  }
}

Boilers.propTypes = {
  boilers: propTypes.array.isRequired
}

export default Boilers;
