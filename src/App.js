import React, { Component } from 'react';
import './App.css';
import { Map, TileLayer, FeatureGroup, Popup, Marker, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import domtoimage from "dom-to-image";

import "../node_modules/leaflet-draw/dist/leaflet.draw.css"
import "../node_modules/leaflet/dist/leaflet.css"

class App extends Component {
  static defaultProps = {
    center: [ 40.7446790, -73.9485420 ],
    zoom: 11
  }

  handleClick = (e) => {
    console.log('Export Clicked');
    const content = document.getElementsByClassName('leaflet-interactive');
    const node = document.getElementById('root');
    domtoimage.toJpeg(node, { quality: 0.95 })
    .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

  }

  render() {
  const Compa = () => (
    <FeatureGroup onClick={(e) => {console.log('Feature Group: <<', e)}}>
      <EditControl 
      position='topright'
      onEdited={(e) => {
        e.layers.eachLayer(a => {
          this.props.updatePlot({
              feature: a.toGeoJSON()
          });
      });
      }}
      onEditMove={(e) => {console.log('On Edit Move: ', e)}}
      onEditStart={(e) => {console.log('On Edit Start: ', e.target)}}
      onEditStop={(e) => {console.log('On Edit Stop', e)}}
      draw={{rectangle: false, polygon: {
        allowIntersection: false,
        showArea: true
      }}}
      />
    </FeatureGroup>
  )
  const position = [43.00, -79.00]
    return (
      <React.Fragment>
      <Map center={position} zoom={11}>
        <TileLayer
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <Compa />
    </Map>
    <button onClick={this.handleClick}>Export</button>
    </React.Fragment>
    );
  }
}

export default App;
