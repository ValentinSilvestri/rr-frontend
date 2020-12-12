import React, { Component } from 'react';
import BoilerItem from './BoilerItem';
import PropTypes from 'prop-types';


class Boilers extends Component {
  render() {
    return this.props.boilers.map((boiler) => (
        <BoilerItem key={boiler.id} boiler={boiler} />
    ));
  }
}


// PropTypes
Boilers.PropTypes = {
    boilers: PropTypes.array.isRequired
}

export default Boilers;
