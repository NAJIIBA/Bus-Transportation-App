import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { tailwind } from 'tailwind-rn';


const BusSelectionScreen = () => {
  const buses = [
    { id: 1, name: 'Sahal Travel', time: '6:00 Am', duration: '1h', price: '50,000sh', availability: '7 qof aya hadhey', availableColor: 'text-green-500' },
    { id: 2, name: 'Star Travel', time: '6:00 Am - 7:00 Am', duration: '1h', price: '50,000sh', availability: '4 aya hadhey', availableColor: 'text-green-500' },
    { id: 3, name: 'Saacid Travel', time: '6:00 Am - 7:00 Am', duration: '1h 30min', price: '45,000sh', availability: '2 aya hadhey', availableColor: 'text-red-500' },
    { id: 4, name: 'Bari & Galbeed Travel', time: '6:00 Am - 7:00 Am', duration: '2h', price: '40,000sh', availability: 'wuu buuxaa', availableColor: 'text-gray-500' },
    { id: 5, name: 'Sacaada Travel', time: '6:00 Am - 7:00 Am', duration: '2h 30min', price: '35,000sh', availability: '6 aya hadhey', availableColor: 'text-green-500' },
  ];

  const renderItem = ({ item }) => (
    <View style={tailwind('bg-white rounded-lg p-4 mb-4 shadow-md')}>
      <View style={tailwind('flex-row justify-between')}>
        <View>
          <Text style={tailwind('text-lg font-bold text-gray-900')}>{item.name}</Text>
          <Text style={tailwind('text-sm text-gray-600 my-1')}>{item.time}</Text>
          <Text style={tailwind(`${item.availableColor} text-sm`)}>{item.availability}</Text>
        </View>
        <View style={tailwind('items-end')}>
          <Text style={tailwind('text-lg font-bold text-red-500')}>{item.price}</Text>
          <Text style={tailwind('text-sm text-gray-600 mt-1')}>{item.duration}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tailwind('flex-1 bg-red-400 p-5')}>
      {/* Header */}
      <View style={tailwind('flex-row items-center mb-5')}>
        <TouchableOpacity>
          <Text style={tailwind('text-2xl text-white mr-3')}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={tailwind('text-2xl text-white font-bold')}>Dooro bus!</Text>
      </View>

      {/* Route Information */}
      <View style={tailwind('items-center mb-5')}>
        <Text style={tailwind('text-2xl text-white font-bold')}>Boorama ↔ Hargiesa</Text>
        <Text style={tailwind('text-sm text-white')}>10-Dec-2023 | Axad</Text>
        <Image
          source={require("../assets/images/images_bus.png")} // Update the path to match your project
          style={tailwind('w-12 h-12 mt-3')}
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