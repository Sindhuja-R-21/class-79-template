import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Meteor Screen!</Text>
      </View>
    );
  }
}

//api for meteors
//https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ