import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Asumiendo que las imágenes están en la carpeta 'assets'
import yerbaBuenaImage from '../assets/sucursal yerba buena gp.png'; // Ejemplo de imagen local
import Punto from '../assets/punto ubicacion gp.png'; // Ejemplo de imagen local
import Header from './Header.js';

const MapComponent = () => {
  const markers = [
    {
      id: 1,
      coordinate: { latitude: -26.800203054012485, longitude: -65.2952676032862 },
      title: 'Sucursal Yerba Buena',
      address: 'Av. Perón 1900',
      image: yerbaBuenaImage, // Imagen local
    },
    {
      id: 2,
      coordinate: { latitude: -26.84348495592563, longitude: -65.19597891807754 },
      title: 'Sucursal Brigido Teran',
      address: 'Av. Perón 2100',
      image: yerbaBuenaImage, // Otra imagen local
    },
    {
      id: 3,
      coordinate: { latitude: -26.75563938491534, longitude: -65.24391350031482 },
      title: 'Sucursal Tafí Viejo',
      address: 'Av. Perón 2100',
      image: yerbaBuenaImage, // Otra imagen local
    }, 
  ];

  return (
    <>
    <View style={styles.containerheader}>
    <Header />
    </View>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -26.800203054012485,
          longitude: -65.2952676032862,
          latitudeDelta: 0.5922,
          longitudeDelta: 0.3421,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.address}
          >
            <View style={styles.markerContainer}>
              <View style={styles.markerImage}/>
            </View>
          </Marker>
        ))}
      </MapView>
    </View></>
  );
};


const styles = StyleSheet.create({
    containerheader: {
        width: '100%',
        height: '10%',
        backgroundColor: '#003366',
    },
    container: {
      flex: 1,
      borderRadius: 50,
    },
    map: {
      width: '100%',
      height: '100%',
      
      borderRadius: 50,
    },
    markerContainer: {
      width: 100, // Aumenta el tamaño del contenedor del marcador
      height: 100, // Aumenta el tamaño del contenedor
    },
    markerImage: {
      width: '100%',
      height: '100%', // Ajusta la imagen para que cubra todo el contenedor
    },
  });

export default MapComponent;
