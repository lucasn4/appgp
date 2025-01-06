import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header.js';
export default function Ofertas() {
  const [imagenActual, setImagenActual] = useState(1);
  const imagenesofertas = [
  require('../assets/Oferta pepsi.png'),
  require('../assets/oferta chorizos.png'),
  require('../assets/precio bebidas gp.png'),
];
  return (
    <>
    <View style={styles.container}>
      <Header />
      <View style={styles.containeroferta}>
        <View style={styles.cuadradotitulo}>
          <Text style={styles.titulooferta}>OFERTAS</Text>
        </View>
        <Image source={imagenesofertas[0]} style={styles.imgofertas} />
        <Image source={imagenesofertas[1]} style={styles.imgofertas} />
        <Image source={imagenesofertas[2]} style={styles.imgofertas} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#003366',
    height: '100%',
  },
  containeroferta: {
    height: '90%',
    width: '100%',
    borderRadius: 39,
    backgroundColor: 'white',
  },
  titulooferta: {
    fontSize: 40,
    fontFamily: 'Onest',
    fontWeight: 'bold',
    color: '#ffcc00',
    textAlign: 'center',
  },
  imgofertas: {
    marginTop: '10%',
    width: '100%',
  },
  cuadradotitulo: {
    marginLeft: '2%',
    width: '95%',
    height: '10%',
    backgroundColor: '#003366',
    marginTop: '5%',
    borderRadius: 20,
    justifyContent: 'center',
  },

});
