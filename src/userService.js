const backendUrl = process.env.REACT_APP_BACKEND_URL;


export const getProfile = (token) => {
  return fetch(`${backendUrl}/user/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

// Function to register a new user
export const register = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      return response.json(); // Returns the registered user data or a success message
    } catch (error) {
      // You may want to handle errors more gracefully in a real application
      console.error("Error during registration:", error);
      throw error;
    }
  };
