import * as React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from "../../assets/LogoName.png"

import styles from "../styles/SignInStyle"

function SignInMobileNumber(){
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions} >REGISTER to KisanSetu</Text>
        <TouchableOpacity onPress={() => alert('Page Coming soon!')} style={styles.button}>
          <Text style={styles.buttonText}>PHONE NUMBER</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

export default SignInMobileNumber

