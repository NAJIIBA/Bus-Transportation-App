import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"; // Import StatusBar
import { AuthProvider } from "./context/AuthContext";
import "../global.css";

export default function Layout() {
  return (
    <AuthProvider>
      {/* Wrap everything inside SafeAreaView */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Set up the StatusBar */}
        <StatusBar style="auto" />

        <Stack initialRouteName="(auth)/login">
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen
            name="(auth)/register"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="BusSelectionScreen"
            options={{ headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </AuthProvider>
  );
}
