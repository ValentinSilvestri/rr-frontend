import React, { Component } from 'react';
import '../css/BoilerItem.css';

export class BoilerItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.boiler.id}</td>
                <td>{this.props.boiler.description}</td>
                <td>{this.props.boiler.boilerType}</td>
                <td>{this.props.boiler.hourMaintenanceCost}</td>
                <td>{this.props.boiler.hourEventualCost}</td>
                <td>{this.props.boiler.maintenanceRate}</td>
                <td>
                    <button onClick={this.props.updateButton.bind(this,this.props.boiler)}>Update</button>
                </td>
                <td>
                    <button onClick={this.props.deleteBoiler.bind(this,this.props.boiler.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default BoilerItem
