import React, { Component } from 'react';
import BoilerItem from './BoilerItem';
import propTypes from 'prop-types';

class Boilers extends Component {
  render() {
    return this.props.boilers.map((boiler) => (
      <BoilerItem key={boiler.id} boiler={boiler} deleteBoiler={this.props.deleteBoiler} />
    ));
  }
}

Boilers.propTypes = {
  boilers: propTypes.array.isRequired
}

export default Boilers;
