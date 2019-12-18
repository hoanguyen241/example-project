import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground  } from 'react-native';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import NewsItem from '../../components/NewsItem';
import SwitchComponent from '../../components/Switch';
import styles from './styles';
import { connect } from 'react-redux';
import { Screens, Values } from '../../common';

class VideoCallScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  Accept(){
    this.props.navigation.navigate(Screens.VideoCallAccept)
  }

  render() {
    const img1 = 'https://www.thesprucepets.com/thmb/jbD_0GJnIVGmnLve7QDe9hCDbPU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp33a24e10lxw100_Medium_214761-5af9d6d7875db900360440a7.jpg';
    const img2 = 'https://img.icons8.com/ios-filled/100/000000/cancel.png';
    const img3 = 'https://img.icons8.com/android/96/000000/phone.png';

    return (
      <ImageBackground source={{uri: img1}} style={styles.container}>
        {/* <Image source={{uri: img1}} style={styles.img1} /> */}
        <View style={styles.viewName}>
          <Text style={styles.txtName}>Sergey The Cat</Text>
          <Text style={styles.txtToCall}>WhatApps audio...</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btnCancel}>
            <Image source={{uri: img2}} style={styles.imgCancel} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOk}  onPress={()=>{this.Accept()}}>
            <Image source={{uri: img3}} style={styles.imgCall} />
          </TouchableOpacity>
        </View>
      </ImageBackground >
    );
  }
}

export default VideoCallScreen;