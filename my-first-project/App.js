import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cafe from './Cafe'
import {useState, useEffect} from 'react';
import PizzaTranslator from './PizzaTranslator';
import MovieTheater from './MovieList';

export default function App() {

  return (
    <View style={styles.container}>
      <MovieTheater/>
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
