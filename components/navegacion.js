import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Appprincipal from './App.js';
import Header from './Header.js';
import CuerpoPrincipal from './CuerpoPrincipal.js';
import Ofertas from './Ofertas.js';
import Sucursales from './Sucursales.js';

const Stack = createStackNavigator();

export default function Navegacion() {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      coordinate: { latitude: -26.800203054012485, longitude: -65.2952676032862 },
      title: 'Sucursal Yerba Buena',
      address: 'Av. Perón 1900',
      image: require('../assets/sucursal yerba buena gp.png'),
    },
    {
      id: 2,
      coordinate: { latitude: -26.84348495592563, longitude: -65.19597891807754 },
      title: 'Another Sucursal',
      description: 'Easily customizable popup.',
    },
    {
      id: 3,
      coordinate: { latitude: -26.758624051225258, longitude: -65.24379700785597 },
      title: 'Sucursal Tafí Viejo',
      address: 'Av. Perón 1900',
      image: require('../assets/sucursal yerba buena gp.png'),
    },
    {
      id: 4,
      coordinate: { latitude: -26.845421335177825, longitude: -65.21152224465153 },
      title: 'Sucursal CSS Popup',
      description: 'Easily customizable popup.',
    },
    {
      id: 5,
      coordinate: { latitude: -27.369963265834112, longitude: -65.59136336934453 },
      title: 'Sucursal Example',
      description: 'Easily customizable popup.',
    },
  ]);
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Appprincipal" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Appprincipal" component={Appprincipal} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="CuerpoPrincipal" component={CuerpoPrincipal} />
        <Stack.Screen name="Ofertas" component={Ofertas} />
        <Stack.Screen name="Sucursales" component={Sucursales}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
