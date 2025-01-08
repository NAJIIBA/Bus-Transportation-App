import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Text style={styles.backButton}>Back</Text>

      {/* Illustration */}
      <Image 
        source={require('../assets/images/transportation.png')} 
        style={styles.image} 
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.subtitleText}>kusoo dhowoow Socdaal Transpotation</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="email" placeholderTextColor="gray" />
      <TextInput style={styles.input} placeholder="password" placeholderTextColor="gray" secureTextEntry />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Create here</Text>
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
  loginButton: {
    backgroundColor: '#FFA500',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    color: 'gray',
  },
  signupLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
