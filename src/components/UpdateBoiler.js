import React , { Component } from 'react';
import '../css/UpdateBoiler.css';

class UpdateBoiler extends Component {

    state = {
        id: '',
        description: '',
        boilerType: '',
        hourMaintenanceCost: '',
        hourEventualCost: '',
        maintenanceRate: '',
    }

    changeValue = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    submition = (e) => {
        e.preventDefault();
        const newBoiler = {
            id: this.state.id,
            description: this.state.description,
            boilerType: this.state.boilerType,
            hourMaintenanceCost: this.state.hourMaintenanceCost,
            hourEventualCost: this.state.hourEventualCost,
            maintenanceRate: this.state.maintenanceRate
        }
        this.props.updateBoiler(newBoiler);
        this.setState( {
            id: '',
            description: '',
            boilerType: '',
            hourMaintenanceCost: '',
            hourEventualCost: '',
            maintenanceRate: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.submition}>
                <div id = 'updateDiv'>
                    <h3 id = 'updateTitle'>
                        Update Boiler: 
                    </h3>
                    <ul>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" placeholder="....." value={this.state.description} onChange={this.changeValue} required/>
                        </li>
                        <li>
                            <label htmlFor="boilerType">Boiler Type:</label>
                            <input type="text" id="boilerType" placeholder="....." value={this.state.boilerType} onChange={this.changeValue} required/>
                        </li>
                        <li>
                            <label htmlFor="hourMaintenanceCost">Hour Maintenance Cost:</label>
                            <input type="number" id="hourMaintenanceCost" placeholder="....." value={this.state.hourMaintenanceCost} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="hourEventualCost">Hour Eventual Cost:</label>
                            <input type="number" id="hourEventualCost" placeholder="....." value={this.state.hourEventualCost} onChange={this.changeValue} required />
                        </li>
                        <li>
                            <label htmlFor="maintenanceRate">Maintenance Rate:</label>
                            <input type="number" id="maintenanceRate" placeholder="....." value={this.state.maintenanceRate} onChange={this.changeValue} required />
                        </li>
                    </ul>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
}

export default UpdateBoiler;