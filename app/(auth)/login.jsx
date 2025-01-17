import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView>
        <View className="bg-white flex flex-col min-h-[83vh] items-center h-screen">
          <Image
            source={require("../../assets/images/transportation.png")} // Correct path to image
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            className="mt-32"
          />

          <Text className="text-4xl my-4 text-red-600 font-bold">
            Bust Transportation App
          </Text>

          <Text className="text-grey-600 my-4 text-xl font-semibold">
            Sign In
          </Text>

          <View className="items-center w-full">
            <TextInput
              placeholder="Phone Number"
              inputMode="numeric"
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              className="border border-gray-700 px-4 py-3 text-lg rounded-2xl w-[85%] mb-2"
            />

            <View className="flex justify-end flex-row mb-2 w-[85%] py-3 content-end">
              <Text className="text-red-500">Forgot password?</Text>
            </View>

            <View className="items-center mb-36 w-full">
              <TouchableOpacity
                className="bg-yellow-500 px-4 py-3 rounded-full w-4/5 mb-2"
                onPress={() => router.push("HomeScreen")}
              >
                <Text className="text-white font-medium text-xl text-center">
                  Log In
                </Text>
              </TouchableOpacity>
              <Text className="text-grey-600 text-xl font-semibold">
                Don't have an account?{" "}
                <Link href="./register" className="text-red-500">
                  Sign Up
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
