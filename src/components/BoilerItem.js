import React, { Component } from 'react';
import propTypes from 'prop-types';

export class BoilerItem extends Component {
    render() {
        return (
            <div style={{ borderBottom: '1px #ccc dotted', display: 'flex', marginLeft: 'auto' }}>
                <p>{ this.props.boiler.description }</p>
                <div style={{ marginLeft: 'auto' }}>
                    <button onClick={() => console.log(this.props.boiler.id)} style={ {margin: '15px' }}>Update</button>
                    <button onClick={() => { this.props.deleteBoiler.bind(this, this.props.boiler.id) }} style={{ margin: '15px' }}>Delete</button>
                </div>
            </div>
        )
    }
}

BoilerItem.propTypes = {
    boilers: propTypes.object.isRequired
}

export default BoilerItem
