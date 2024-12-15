# Senior Design Project - StayAware

# Contributors

### Ryan Carman, Sam Dappen, Braeden Huth, Nathan Phillips, Hayes Kennedy

# Note - Please Read This 
The Azure resources for this project, including Cosmos DB and IoT Hub, have been deleted due to the expenses of maintaining the environment. As a result, the project will no longer function as intended without these resources. This serves as a demonstration of what the project did and how it worked.

## Overview
This project is a comprehensive IoT device management platform that allows users to register and manage various IoT devices. The platform provides secure user authentication, device registration, and management functionalities, all integrated with Microsoft Azure services.

## Features
- **User Authentication**: Secure authentication using Azure AD B2C and traditional email/password.
- **Device Management**: Register, view, update, and delete IoT devices.
- **Real-time Device Updates**: Integration with Azure IoT Hub for real-time device data.
- **Responsive Frontend**: User-friendly interface developed with React.js.

## Technology Stack
- **Frontend**: React.js, CSS Modules, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: Azure Cosmos DB
- **IoT Management**: Azure IoT Hub
- **Authentication**: Azure AD B2C, traditional email/password
- **Other**: Nodemailer, JSON Web Tokens (JWT)

## Usage

### User Authentication
- **Azure AD B2C**: Secure, enterprise-level authentication.
- **Traditional Email/Password**: Includes password hashing with bcrypt and session management with JWT.
- **Security Steps**:
  - Passwords are hashed using bcrypt before storage.
  - JWT tokens are used for user sessions.
  - Nodemailer is used for password reset functionality.

### Device Management
- **Register Devices**: Users can register IoT devices, including LIFX and Raspberry Pi devices.
- **View Devices**: List all registered devices.
- **Update Devices**: Update device details.
- **Delete Devices**: Remove devices from the system.
- **Azure Cosmos DB**:
  - **Users Container**: Stores user credentials and profile information.
  - **Devices Container**: Stores registered IoT device data.
- **Azure IoT Hub**: Manages registered IoT devices and handles real-time data.

### Raspberry Pi Integration
- **Setup Script**: Downloads and runs locally on the Raspberry Pi to configure it for the project.
    - To see the script: [click here:](public/downloads/setupStayAware.sh)
- **Vulnerability Scanner**: A script to scan the Raspberry Pi for vulnerabilities.
    - To see the script: [click here:](public/downloads/iotDeviceManager.js)

### Additional Features
- **Responsive Design**: The frontend is designed to be user-friendly and responsive.
- **Real-time Updates**: Integration with Azure IoT Hub for real-time updates from IoT devices.
- **Comprehensive Security**: Implementation of best security practices for authentication and data management.

## Note  
- The following demo has no audio and serves just as a visual demonstration of the website and some of its functionalities

### StayAware Demo Video

[![Watch the Video](https://img.youtube.com/vi/QMRvsm96PvU/0.jpg)](https://youtu.be/QMRvsm96PvU)

Click the image above to watch the video directly on YouTube. 
  




