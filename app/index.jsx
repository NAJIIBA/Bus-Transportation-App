import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ArrowUpDown, Calendar } from 'lucide-react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="bg-[#FF6B6B] pt-12 pb-4 px-4 rounded-b-3xl">
        <Text className="text-white text-3xl font-bold">Hey BSE!</Text>
        <Text className="text-white text-2xl">Halked Tageysa.</Text>
        <Image 
        source={require('../assets/bus.png')}
          className="w-24 h-12 self-center mt-2"
          resizeMode="contain"
        />
      </View>

      {/* Main Content */}
      <View className="flex-1 mx-4 -mt-6">
        <View className="bg-[#FFA45B] p-6 rounded-3xl">
          {/* From Input */}
          <View className="bg-white rounded-lg mb-4">
            <TextInput
              placeholder="From"
              className="p-4 text-gray-600"
            />
          </View>

          {/* Swap Button */}
          <TouchableOpacity className="absolute right-8 top-16 z-10 bg-[#FF6B6B] p-2 rounded-full">
            <ArrowUpDown size={20} color="white" />
          </TouchableOpacity>

          {/* To Input */}
          <View className="bg-white rounded-lg mb-6">
            <TextInput
              placeholder="To"
              className="p-4 text-gray-600"
            />
          </View>

          {/* Date Buttons */}
          <View className="flex-row justify-between mb-6">
            <TouchableOpacity className="bg-[#FF8C42] px-6 py-3 rounded-full">
              <Text className="text-white font-semibold">MAANTA</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#FF8C42] px-6 py-3 rounded-full">
              <Text className="text-white font-semibold">BERRI</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#FF8C42] px-6 py-3 rounded-full flex-row items-center">
              <Calendar size={18} color="white" className="mr-1" />
              <Text className="text-white font-semibold">DATE</Text>
            </TouchableOpacity>
          </View>

          {/* Search Button */}
          <TouchableOpacity className="bg-[#FF6B6B] py-4 rounded-full">
            <Text className="text-white text-center text-lg font-bold">
              Raadi Bus
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}