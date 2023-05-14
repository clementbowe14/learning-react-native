import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Cat'
import {useState, useEffect} from 'react';


export default function Cafe() {

    return (
      <View style={styles.container}>
        <Cat name="Edward"></Cat>
        <StatusBar style="auto" />
        <Cat name="Jonathan"/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });