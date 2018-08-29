import React, { Component } from 'react';
import './App.css';
import {withGoogleMap, GoogleMap, withScriptjs, Marker} from 'react-google-maps';
import {API_KEY} from './config';

class App extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  render() {
    const Map = withScriptjs(withGoogleMap((props) => 
    <GoogleMap 
    defaultZoom={this.props.zoom}
    defaultCenter={this.props.center}>
    {props.isMarkerShown && <Marker position={this.props.center}/>}
    </GoogleMap>
  ));
  const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
    return (
      <div className="App">
        <Map isMarkerShown 
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
