import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import "../global.css";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack initialRouteName="(auth)/login">
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="BusSelectionScreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
