import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          // region={{
          //   latitude:-6.270565,
          //   longitude:106.759550,
          //   latitudeDelta: 1,
          //   longitudeDelta: 1
          // }}
          initialRegion={{
            latitude: 8.977747967015506,
            latitudeDelta: 0.9765891151244901,
            longitude: 105.0926742888987,
            longitudeDelta: 0.5483095720410347
          }}
          mapType="standard"
        >
        </MapView>
      </View>
    );
  }
}

export default MapScreen;