import React from 'react';
import { StyleSheet, View } from 'react-native';
import CuerpoPrincipal from './CuerpoPrincipal';
import Header from './Header';

export default function App() {
  return (
    <>
      <View style={styles.container}>
      <Header />
      <View style={styles.cuerpo}>
        <CuerpoPrincipal />
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003366',
    height: '100%',
  },
  cuerpo: {
    backgroundColor: 'white',
    width: '100%',
    height: '90%',
    borderRadius: 50,
    position: 'relative',
  },
});
