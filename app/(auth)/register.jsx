import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Placeholder function for form submission
  function handleSubmit() {
    if (!fullName || !phoneNumber || !password || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setLoading(true);

    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful!"); // Placeholder for success feedback
    }, 2000);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-white flex flex-col min-h-[83vh] items-center h-screen">
          {/* <Image
            source={require("assets/images/buslogin.png")}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            className="mt-32"
          /> */}

          <Text className="text-4xl my-4 text-red-600 font-bold">
            Bus Transportation
          </Text>

          <Text className="text-grey-600 my-4 text-xl font-semibold">
            Create an Account
          </Text>

          <View className="items-center w-full mt-2 h-fit justify-between">
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="Full Name"
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />

            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Phone Number"
              inputMode="numeric"
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={true}
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />

            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />

            <Text className="text-red-500 text-sm">{error}</Text>

            <View className="items-center mb-32 mt-2 w-full">
              {loading ? (
                <ActivityIndicator size="large" color="#FF0000" />
              ) : (
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="bg-yellow-500 px-4 py-3 rounded-full w-4/5 mb-2"
                >
                  <Text className="text-white font-medium text-xl text-center">
                    Register
                  </Text>
                </TouchableOpacity>
              )}

              <Text className="text-grey-600 text-xl font-semibold">
                Have an account?{" "}
                <Link href="./login" className="text-red-500">
                  Sign in
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Register;
