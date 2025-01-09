import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Adjusted import path for transportation image
import transportationImage from '../../assets/images/transportation.png';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Text style={styles.backButton}>Back</Text>

      {/* Illustration */}
      <Image 
        source={transportationImage} // Use the transportation image here
        style={styles.image} 
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.subtitleText}>kusoo dhowoow Socdaal Transpotation</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="email" placeholderTextColor="gray" />
      <TextInput style={styles.input} placeholder="username" placeholderTextColor="gray" />
      <TextInput style={styles.input} placeholder="enter password" placeholderTextColor="gray" secureTextEntry />
      <TextInput style={styles.input} placeholder="re-enter password" placeholderTextColor="gray" secureTextEntry />

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Have an account? <Text style={styles.loginLink}>Login here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
  },
  signupButton: {
    backgroundColor: '#FFA500',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    color: 'gray',
  },
  loginLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
