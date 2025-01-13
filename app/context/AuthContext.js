import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching token from storage
    const fetchToken = async () => {
      // Replace with actual token retrieval logic
      const storedToken = null; // Simulating no token found
      setToken(storedToken);
      setIsLoading(false);
    };

    fetchToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, isLoading, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
