import { registerRootComponent } from 'expo';
import Navegacion from './components/navegacion.js';
//import App from './components/App.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Navegacion);
