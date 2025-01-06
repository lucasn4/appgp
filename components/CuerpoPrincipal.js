import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CuerpoPrincipal() {
  const [imagenActual, setImagenActual] = useState(1);
  const imagenesofertas = [
    require('../assets/Oferta pepsi.png'),
    require('../assets/oferta chorizos.png'),
  ];
  const navigation = useNavigation(); // Hook para la navegación

  const cambiarImagen = (direccion) => {
    if (direccion === 'anterior') {
      setImagenActual(imagenActual === 0 ? imagenesofertas.length - 1 : imagenActual - 1);
    } else {
      setImagenActual(imagenActual === imagenesofertas.length - 1 ? 0 : imagenActual + 1);
    }
  };

  return (
      <View style={styles.cuerpo}>
        {/* Línea de mover ofertas */}
        <View style={styles.lineamoverofertas}>
          <TouchableOpacity style={styles.anterioroferta} onPress={() => cambiarImagen('anterior')}>
            <Text style={styles.botonTexto}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.siguienteoferta} onPress={() => cambiarImagen('siguiente')}>
            <Text style={styles.botonTexto}>→</Text>
          </TouchableOpacity>
        </View>
        <Image source={imagenesofertas[imagenActual]} style={styles.oferta} />

        {/* Botón para cambiar a Ofertas */}
        <View style={styles.botonesprincipales}>
  <View style={styles.fila}>
    <TouchableOpacity style={styles.botonofertas} onPress={() => navigation.navigate('Ofertas')}>
      <Image source={require('../assets/ofertas gp.png')} style={styles.ofertagp} />
      <Text style={styles.botonTexto}>Ofertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botonofertas} >
      <Image source={require('../assets/precios gp.png')} style={styles.ofertagp} />
      <Text style={styles.botonTexto}>Precios</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.fila}>
    <TouchableOpacity style={styles.botonofertas}>
      <Image source={require('../assets/tarjetas gp.png')} style={styles.ofertagp} />
      <Text style={styles.botonTexto}>Medios de Pago</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botonofertas} onPress={() => navigation.navigate('Sucursales')}>
      <Image source={require('../assets/punto ubicacion gp.png')} style={styles.ofertagp} />
      <Text style={styles.botonTexto}>Sucursales</Text>
    </TouchableOpacity>
  </View>
</View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  cuerspo: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  oferta: {
    marginTop: '11%',
    position: 'absolute',
  },
  lineamoverofertas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    marginTop: '20%',
    left: '0%',
    zIndex: 10,
  },
  anterioroferta: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  siguienteoferta: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  botonesprincipales: {
    flex: 1,
    marginTop: '90%',
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
  },
  fila: {
    flexDirection: 'row',
    marginBottom: '40%', // Espacio entre filas
  },
  botonTexto: {
    fontSize: 24,
    color: '#ffcc00',
    textAlign: 'center',
  },
  botonofertas: {
    width: 150,
    height: 126,
    backgroundColor: '#003366',
    flexDirection: 'column',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '8%', 
  },
  ofertagp: {
    width: '52%',
    height: '60%',
  },
});
