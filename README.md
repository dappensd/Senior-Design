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

## Setup Instructions
1. **Clone the repository**:
    ```bash
    git clone https://github.com/dappensd/Senior-Design.git
    cd Senior-Design
    ```

2. **Install dependencies**:
    ```bash
    cd backend
    npm install
    cd ../
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in both the `backend` and `frontend` directories and add the required environment variables.
   
  -  __Listing out the contents of the environment variables on github is terrible for security!!! This is only for demonstration purposes only to show what our environment variable files looked like.__

### Frontend Environment Variables

```bash
# Azure AD Data
REACT_APP_AZUREAD_TENANT_ID=98aed406-c860-425e-90b8-0f6af9d280a8
REACT_APP_AZUREAD_TENANT_NAME=StayAware
REACT_APP_AZUREAD_CLIENT_ID=edb0c994-1673-4309-81eb-8f4f3d74d740
REACT_APP_AZUREAD_CLIENT_SECRET=cbbea942-def5-4dcb-8c2c-871a7f4774da
REACT_APP_AZUREAD_CALLBACK_URL=https://StayAware.onmicrosoft.com/auth/azure/callback
REACT_APP_AZUREAD_POLICY_NAME=B2C_1_SignUpSignIn
REACT_APP_BACKEND_URL=http://localhost:3001
```

### Backend Environment Variables

```bash
#Azure AD Data
AZUREAD_TENANT_ID=98aed406-c860-425e-90b8-0f6af9d280a8
AZUREAD_TENANT_NAME=StayAware
AZUREAD_CLIENT_ID=edb0c994-1673-4309-81eb-8f4f3d74d740
AZUREAD_CLIENT_SECRET=cbbea942-def5-4dcb-8c2c-871a7f4774da
AZUREAD_CALLBACK_URL=https://StayAware.onmicrosoft.com/auth/azure/callback
AZUREAD_POLICY_NAME=B2C_1_SignUpSignIn

# Client Secret Key
SESSION_SECRET=dd1fc6bf4533fbfde65f25c7683df2b76f983960329ce2aac60c04e187a337d2341b4523d84e250d92e60b07f9b63f1fa374f776d72385675ac768abcd06340f

# Azure Cosmos DB Info
COSMOS_DB_ENDPOINT=https://stayawaredb.documents.azure.com:443/
COSMOS_DB_KEY=ct5bcZHXK6GN1kIsGoQhnRxAlask5AlQPOmoUDUoPsobvPRtbagiFtXjz8eg5dUALixAhY54CWK0ACDbAzt2kA==
COSMOS_DB_CONNECTION_STRING=AccountEndpoint=https://stayawaredb.documents.azure.com:443/;AccountKey=ct5bcZHXK6GN1kIsGoQhnRxAlask5AlQPOmoUDUoPsobvPRtbagiFtXjz8eg5dUALixAhY54CWK0ACDbAzt2kA==;


#JSON Web Token Secret
JWT_SECRET=c349a2169c9c450f09794d5c9fabb925192d3a52316a90b60e8a5bab4707bf94ab5dc85bb9dd38491700dc239e5c4a4f5c9390b8880932b3eec464e044de4778

#Email Service Keys
EMAIL_USERNAME=2bc81ecb9ca77a6761a0f1e7ac7a19c20005bbc174618a17aff6943f2a47633526a8da50c82f84df0b2a1b0d8aa78d8b00c7a722ca7c52aec029dfaa06e67fb2 
EMAIL_PASSWORD=3cdf3d66da20941228007e0f0fbac16ec380cc6fc4c4146907de43c45031f397747494c0fa3767deea07a1423177640a536f644d403bd673be0791787c45509e

#Azure IoT Hub
IOT_HUB_CONNECTION_STRING=HostName=StayAware.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=PkV74y+1s3JtKgOdflRRtJ+TxYnHScBtGAIoTIIn/JA=
```

5. **Run the backend server**:
    ```bash
    cd backend
    node server.js
    ```

6. **Run the frontend development server**:
    ```bash
    cd ../
    npm start
    ```

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
- The following videos have no audio and serves just as a visual demonstration of the website and some of its functionalities
### StayAware Demo Part 1
[Demo Part 1](https://github.com/dappensd/Senior-Design/raw/main/public/videos/StayAwareDemoPart1.mp4)

### StayAware Demo Part 2
[Demo Part 2](https://github.com/dappensd/Senior-Design/raw/main/public/videos/StayAwareDemo_Part2.mp4)




