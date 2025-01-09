import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const BusSelectionScreen = () => {
  const buses = [
    { id: 1, name: 'Sahal Travel', time: '6:00 Am', duration: '1h', price: '50,000sh', availability: '7 qof aya hadhey', availableColor: 'green' },
    { id: 2, name: 'Star Travel', time: '6:00 Am - 7:00 Am', duration: '1h', price: '50,000sh', availability: '4 aya hadhey', availableColor: 'green' },
    { id: 3, name: 'Saacid Travel', time: '6:00 Am - 7:00 Am', duration: '1h 30min', price: '45,000sh', availability: '2 aya hadhey', availableColor: 'red' },
    { id: 4, name: 'Bari & Galbeed Travel', time: '6:00 Am - 7:00 Am', duration: '2h', price: '40,000sh', availability: 'wuu buuxaa', availableColor: 'gray' },
    { id: 5, name: 'Sacaada Travel', time: '6:00 Am - 7:00 Am', duration: '2h 30min', price: '35,000sh', availability: '6 aya hadhey', availableColor: 'green' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.busName}>{item.name}</Text>
          <Text style={styles.busTime}>{item.time}</Text>
          <Text style={[styles.availability, { color: item.availableColor }]}>{item.availability}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Dooro bus!</Text>
      </View>

      {/* Route Information */}
      <View style={styles.routeInfo}>
        <Text style={styles.routeText}>Boorama ↔ Hargiesa</Text>
        <Text style={styles.dateText}>10-Dec-2023 | Axad</Text>
        <Image
          source={require('../../assets/images/bus_icon.png')} // Update the path to match your project
          style={styles.busImage}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F61',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  routeInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  routeText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
  },
  busImage: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  busTime: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  availability: {
    fontSize: 14,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  duration: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default BusSelectionScreen;
