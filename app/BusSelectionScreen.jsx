import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

const BusSelectionScreen = () => {
  const buses = [
    {
      id: 1,
      name: "Sahal Travel",
      time: "6:00 Am",
      duration: "1h",
      price: "50,000sh",
      availability: "7 qof aya hadhey",
      availableColor: "text-green-500",
    },
    {
      id: 2,
      name: "Star Travel",
      time: "6:00 Am - 7:00 Am",
      duration: "1h",
      price: "50,000sh",
      availability: "4 aya hadhey",
      availableColor: "text-green-500",
    },
    {
      id: 3,
      name: "Saacid Travel",
      time: "6:00 Am - 7:00 Am",
      duration: "1h 30min",
      price: "45,000sh",
      availability: "2 aya hadhey",
      availableColor: "text-red-500",
    },
    {
      id: 4,
      name: "Bari & Galbeed Travel",
      time: "6:00 Am - 7:00 Am",
      duration: "2h",
      price: "40,000sh",
      availability: "wuu buuxaa",
      availableColor: "text-gray-500",
    },
    {
      id: 5,
      name: "Sacaada Travel",
      time: "6:00 Am - 7:00 Am",
      duration: "2h 30min",
      price: "35,000sh",
      availability: "6 aya hadhey",
      availableColor: "text-green-500",
    },
  ];

  const router = useRouter();

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg font-bold text-gray-900">{item.name}</Text>
          <Text className="text-sm text-gray-600 my-1">{item.time}</Text>
          <Text className={`${item.availableColor} text-sm`}>
            {item.availability}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-bold text-red-500">{item.price}</Text>
          <Text className="text-sm text-gray-600 mt-1">{item.duration}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-red-400 p-5">
      {/* Header */}
      <View className="flex-row items-center mb-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-2xl text-white mr-3">{"<"}</Text>
        </TouchableOpacity>
        <Text className="text-2xl text-white font-bold">Dooro bus!</Text>
      </View>

      {/* Route Information */}
      <View className="items-center mb-5">
        <Text className="text-2xl text-white font-bold">
          Boorama ↔ Hargiesa
        </Text>
        <Text className="text-sm text-white">10-Dec-2023 | Axad</Text>
        <Image
          source={require("../assets/images/images_bus.png")} // Update the path to match your project
          className="w-12 h-12 mt-3"
        />
      </View>

      {/* Bus List */}
      <FlatList
        data={buses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default BusSelectionScreen;
