#!/bin/bash

# Define your project directory
PROJECT_DIR="StayAware"

# Install NVM (Node Version Manager) and Node.js
install_node() {
    echo "Installing NVM (Node Version Manager)..."
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

    # Load NVM into the current session
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

    # Install the latest stable version of Node.js and npm
    echo "Installing the latest stable version of Node.js..."
    nvm install --lts

    # Update the PATH for the current session
    export PATH="$PATH:$HOME/.nvm/versions/node/$(nvm current)/bin"

    # Ensure the Node and npm binaries are available in new shells
    if ! grep -q 'NVM_DIR' ~/.bashrc; then
        echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
        echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
        echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc
    fi

    # Ensure npm is installed and in the PATH
    if ! command -v npm &> /dev/null; then
        echo "npm not found. Installing npm..."
        nvm install-latest-npm
    fi
}

# Install Node.js and npm if they're not installed
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    install_node
else
    echo "Node.js and npm are already installed."
fi

# Check node and npm versions
echo "Node.js version:"
node -v
echo "npm version:"
npm -v

# Create project directory if it doesn't exist
if [ ! -d "$HOME/$PROJECT_DIR" ]; then
    echo "Creating project directory..."
    mkdir -p "$HOME/$PROJECT_DIR"
fi

cd "$HOME/$PROJECT_DIR"

# Initialize Node.js project if not already initialized
if [ ! -f "package.json" ]; then
    echo "Initializing Node.js project..."
    npm init -y
fi

# Install necessary NPM packages for your project
echo "Installing Azure IoT packages..."
npm install azure-iot-device azure-iot-device-mqtt

# Check if ClamAV is installed
if ! command -v clamscan &> /dev/null; then
    echo "ClamAV could not be found. Installing..."
    sudo apt-get install -y clamav clamav-daemon
    sudo freshclam
else
    echo "ClamAV is already installed."
fi

# Check for the iotDeviceManager.js in the StayAware directory
if [ -f "iotDeviceManager.js" ]; then
    echo "iotDeviceManager.js is already in the StayAware directory."
elif [ -f "../iotDeviceManager.js" ]; then
    echo "Moving iotDeviceManager.js to the StayAware directory..."
    mv ../iotDeviceManager.js ./
else
    echo "iotDeviceManager.js does not exist in the expected location. Please make sure it's downloaded."
fi

# Run the Node.js script if it exists
if [ -f "iotDeviceManager.js" ]; then
    echo "Running iotDeviceManager.js..."
    node iotDeviceManager.js
else
    echo "iotDeviceManager.js script not found, skipping execution."
fi

echo "Setup complete."

