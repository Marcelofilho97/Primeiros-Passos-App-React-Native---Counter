import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Counter } from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TitleApp}> Bem Vindo ao Counter App</Text>
      <Counter/>
      <StatusBar style="auto" />
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
  TitleApp: {
    fontSize: 24,
  }
});
