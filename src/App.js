import React, { Component } from 'react';
import './App.css';
import {API_KEY} from './config';
import { Map, TileLayer, FeatureGroup, Popup, Marker } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

import "../node_modules/leaflet-draw/dist/leaflet.draw.css"
import "../node_modules/leaflet/dist/leaflet.css"

class App extends Component {
  static defaultProps = {
    center: [ 40.7446790, -73.9485420 ],
    zoom: 11
  }
  render() {
  const position = [43.00, -79.00]

  const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <Map center={position} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
    </Map>
    );
  }
}

export default App;
