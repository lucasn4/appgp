import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation(); // Hook para navegación

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Image source={require('../assets/images.jpg')} style={styles.image} />
        <TouchableOpacity style={styles.botonofertas}>
          <Text style={styles.header}>GOMEZ PARDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    width: '100%',
  },
  titulo: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    top: '30%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  header: {
    fontSize: 40,
    color: '#ffcc00',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
