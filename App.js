import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from "./assets/LogoName.png"

import { Picker } from "@react-native-picker/picker";
export default function App() {

  const [country, setCountry] = useState('Unknown');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions} >Choose You Language</Text>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select your Language" value="Unknown" />
        <Picker.Item label="English" value="EN" />
        <Picker.Item label="Kannada" value="KA" />
        <Picker.Item label="Hindi" value="HI" />
        <Picker.Item label="Telugu" value="TE" />
      </Picker>
      <TouchableOpacity onPress={() => alert('Page Coming soon!')} style={styles.button}>
        <Text style={styles.buttonText}>PROCEED</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#000',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  button: {
    width: 370,
    height: 40,
    backgroundColor: "#009788",
    padding: 7,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  picker: {
    marginVertical: 0,
    width: 370,
    padding: 0,
    borderColor: "#666",
  },
});
