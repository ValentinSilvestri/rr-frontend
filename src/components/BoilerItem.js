import React, { Component } from 'react';
import propTypes from 'prop-types';

export class BoilerItem extends Component {
    render() {
        const { id, description } = this.props.boiler;
        return (
            <div style={{borderBottom: '1px #ccc dotted', display: 'flex', marginLeft: 'auto'}}>
                <p>{ description}</p>
                <div style={{marginLeft: 'auto'}}>
                    <button style={{margin: '15px'}}>Update</button>
                    <button style={{margin: '15px'}}>Delete</button>
                </div>

            </div>
        )
    }
}

// PropTypes
BoilerItem.propTypes = {
    boilers: propTypes.object.isRequired
}

export default BoilerItem
