import * as React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import logo from "../../assets/LogoName.png"
import { Picker } from "@react-native-picker/picker";

import styles from "../styles/SignInStyle"

function SignInSelectLanguage({ navigation }) {

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
        <TouchableOpacity onPress={() => navigation.navigate('MobileNumber')} style={styles.button}>
          <Text style={styles.buttonText}>PROCEED</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  export default SignInSelectLanguage
