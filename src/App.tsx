import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.scss';

import icon from './assets/marker.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [20, 30],
  iconAnchor: [5, 20],
  popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

type Location = [number, number];

const zoom = 14.2;
const locations: Location[] = [
  [47.22371511263003, 39.723735758273484],
  [47.22365967883551, 39.71774845275119],
  [47.222062023815184, 39.715834370542275],
  [47.22640441367327, 39.71928570612444],
  [47.22523286768182, 39.70576961716902],
  [47.23356193390934, 39.71429169385564],
  [47.228988681195176, 39.734570387721256],
  [47.21969589178314, 39.7107918533633],
  [47.226794456584614, 39.73638749999004],
  [47.249349831128264, 39.71074935827348],
  [47.25907173357428, 39.719458987721254],
  [47.22409100370286, 39.711511188547696],
  [47.21949191603186, 39.70377802287116],
  [47.2292528626418, 39.72900824270179],
];

const App = () => {
  return (
    <div className="app-container">
      <div className="main-title">адреса Кексов в Ростове</div>

      <MapContainer center={[47.2296193390934, 39.71429169385564]} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((place) => (
          <Marker position={place}>
            <Popup>тут Кекс</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="sub-title">булки • кофе • любовь</div>
    </div>
  );
};

export default App;
