import React from 'react';
import '../css/updateForm.css';

export default function UpdateForm() {
    return (
        <div id="myModal" className="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>
                    Update form
                </h4>
                <ul id="list">
                    <li>
                        <label for="id">Id:</label>
                        <input type="number" id="id" placeholder="....."/>
                    </li>
                    <li>
                        <label for="description">Description:</label>
                        <input type="text" id="description" placeholder="....."/>
                    </li>
                    <li>
                        <label for="boilerType">Boiler Type:</label>
                        <input type="text" id="boilerType" placeholder="....." />
                    </li>
                    <li>
                        <label for="hourMaintenanceCost">Hour Maintenance Cost:</label>
                        <input type="number" id="hourMaintenanceCost" placeholder="....." />
                    </li>
                    <li>
                        <label for="hourEventualCost">Hour Eventual Cost:</label>
                        <input type="number" id="hourEventualCost" placeholder="....." />
                    </li>
                    <li>
                        <label for="maintenanceRate">Maintenance Rate:</label>
                        <input type="number" id="maintenanceRate" placeholder="....." />
                    </li>
                </ul>
                <button onClick={() => console.log("Update Boiler")}>Save</button>
            </div>
        </div>
    )
}
