import React, { Component } from 'react';
import BoilerItem from './BoilerItem';
import propTypes from 'prop-types';

class Boilers extends Component {
  render() {
    return (
      <div>
        <table style = {{ width: '100%'}}>
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
            {this.props.boilers.map(boiler => <BoilerItem key={boiler.id} boiler={boiler}/>)}
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
