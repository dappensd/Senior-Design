import React from 'react';
import './DeviceDetails.css';

class DeviceDetails extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty list of devices
    this.state = {
      devices: []
    };
  }

  // Handler for form submission
  handleRegisterDevice = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new device object
    const newDevice = {
      deviceId: event.target.deviceId.value,
      connectionString: event.target.deviceConnectionString.value,
      deviceType: event.target.deviceType.value,
      firmwareVersion: event.target.firmwareVersion.value,
      ipAddress: event.target.ipAddress.value
    };

    // Update the state with the new device
    this.setState(prevState => ({
      devices: [...prevState.devices, newDevice]
    }));

    // Optional: Clear the form fields after submission
    event.target.reset();
  }

  render() {
    return (
      <div className="device-details-container">
        <h2>Register a New Device</h2>
        {/* Updated form with onSubmit handler */}
        <form onSubmit={this.handleRegisterDevice}>
        <div>
          <label htmlFor="deviceId">Device ID:</label>
          <input type="text" id="deviceId" name="deviceId" required />
        </div>

        <div>
          <label htmlFor="deviceConnectionString">Device Connection String:</label>
          <input type="text" id="deviceConnectionString" name="deviceConnectionString" required />
        </div>

        <div>
          <label htmlFor="deviceType">Device Type/Model:</label>
          <input type="text" id="deviceType" name="deviceType" required />
        </div>

        <div>
          <label htmlFor="firmwareVersion">Device Firmware Version:</label>
          <input type="text" id="firmwareVersion" name="firmwareVersion" required />
        </div>

        <div>
          <label htmlFor="ipAddress">IP Address:</label>
          <input type="text" id="ipAddress" name="ipAddress" required />
        </div>

        <div>
          <input type="submit" value="Register Device" />
        </div>
        </form>

        {/* New section: Table displaying registered devices */}
        <div className="registered-devices-container">
          <h3>Registered Devices</h3>
          <table>
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Connection String</th>
                <th>Device Type/Model</th>
                <th>Firmware Version</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows are dynamically created based on the devices in the state */}
              {this.state.devices.map((device, index) => (
                <tr key={index}>
                  <td>{device.deviceId}</td>
                  <td>{device.connectionString}</td>
                  <td>{device.deviceType}</td>
                  <td>{device.firmwareVersion}</td>
                  <td>{device.ipAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DeviceDetails;




