import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router"; // For navigation
import { AuthContext } from "./context/AuthContext"; // Import your context

const IndexScreen = () => {
  const router = useRouter();
  const { token, isLoading } = useContext(AuthContext); // Access token and loading from context
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // If token is found, navigate to the home screen, else navigate to the login screen
      if (token) {
        router.push("/HomeScreen"); // Redirect to home if user is authenticated
      } else {
        router.push("/(auth)/login"); // Redirect to login if no token is found
      }
      setIsReady(true);
    }
  }, [token, isLoading, router]);

  if (!isReady || isLoading) {
    // Display loading spinner while checking token
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return null; // No UI to render here, as we are handling the navigation
};

export default IndexScreen;
