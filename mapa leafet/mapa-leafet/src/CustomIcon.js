import L from 'leaflet';

// Configura el icono personalizado
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png', // URL de la imagen del marcador
  iconSize: [200, 200], // Tamaño del icono (ancho, alto)
  iconAnchor: [25, 50], // Punto de anclaje del icono (centro inferior)
  popupAnchor: [0, -50], // Punto donde se posiciona el popup
});

export default customIcon;
