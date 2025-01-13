import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { ChevronLeft, ArrowLeftRight } from 'lucide-react-native';

export default function BusSeatsScreen({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Seat data structure
  const seatRows = [
    ['available', 'booked', 'empty', 'empty'],
    ['booked', 'available', 'empty', 'empty'],
    ['available', 'booked', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['booked', 'booked', 'empty', 'empty']
  ];

  const handleSeatPress = (rowIndex, colIndex) => {
    const seatId = `${rowIndex}-${colIndex}`;
    if (seatRows[rowIndex][colIndex] === 'available') {
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
  };

  const getSeatColor = (status, rowIndex, colIndex) => {
    const seatId = `${rowIndex}-${colIndex}`;
    if (selectedSeats.includes(seatId)) return 'bg-[#FFA500]';
    if (status === 'booked') return 'bg-[#FF6B6B]';
    if (status === 'available') return 'bg-[#FFA500]';
    return 'bg-gray-300';
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="bg-[#FF6B6B] px-4 pb-6">
        <View className="flex-row items-center justify-between mt-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeft size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-lg font-semibold">Next</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-white text-2xl text-center mt-4">
          Dooro Kursigaaga!
        </Text>

        <View className="flex-row items-center justify-center space-x-4 mt-4">
          <Text className="text-white text-2xl font-bold">Boorama</Text>
          <ArrowLeftRight size={24} color="white" />
          <Text className="text-white text-2xl font-bold">Hargiesa</Text>
        </View>

        <Text className="text-white text-xl text-center mt-2">
          10-Dec-2023 /Axad
        </Text>
      </View>

      {/* Travel Info Card */}
      <View className="mx-4 -mt-2 bg-white rounded-xl shadow-lg p-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-semibold text-gray-700">
            Sahal Travel
          </Text>
          <Text className="text-2xl font-bold text-[#FFA500]">
            50,000sh
          </Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text className="text-gray-600">
            6:00 Am - 7:00 Am
          </Text>
          <Text className="text-gray-600">1h</Text>
        </View>
        <Text className="text-green-500 mt-2">
          4 qof aya hadhey
        </Text>
      </View>

      {/* Seat Legend */}
      <View className="flex-row justify-around px-4 mt-6">
        <View className="items-center">
          <View className="w-6 h-6 rounded-md bg-[#FF6B6B]" />
          <Text className="text-gray-600 mt-1">kiro</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 rounded-md bg-gray-300" />
          <Text className="text-gray-600 mt-1">bannaan</Text>
        </View>
        <View className="items-center">
          <View className="w-6 h-6 rounded-md bg-[#FFA500]" />
          <Text className="text-gray-600 mt-1">kaaga</Text>
        </View>
      </View>

      {/* Seats Grid */}
      <ScrollView className="flex-1 px-4 mt-6">
        <View className="flex-row justify-center">
          <View className="gap-4">
            {seatRows.map((row, rowIndex) => (
              <View key={rowIndex} className="flex-row gap-4">
                {row.map((status, colIndex) => (
                  <TouchableOpacity
                    key={`${rowIndex}-${colIndex}`}
                    onPress={() => handleSeatPress(rowIndex, colIndex)}
                    disabled={status === 'empty' || status === 'booked'}
                    className={`w-14 h-14 rounded-xl ${getSeatColor(status, rowIndex, colIndex)}`}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}