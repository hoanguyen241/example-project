import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { Screens, Values } from '../../common';

const functionList = [
  {id: 0, title: Screens.Home, bgColor: 'green', txtColor: "white", bgImg: "https://znews-photo.zadn.vn/w1024/Uploaded/lce_cjvcc/2019_07_01/BMWS1000RR_1.jpg",},
  {id: 1, title: Screens.Demo, bgColor: 'green', txtColor: "white", bgImg: "https://cdn.24h.com.vn/upload/4-2018/images/2018-12-21/1545387405-138-1-1545311542-width660height438.jpg",},
  //{id: 2, title: Screens.VideoCall, bgColor: 'green', txtColor: "white", bgImg: "https://cdn.24h.com.vn/upload/4-2018/images/2018-12-21/1545387405-138-1-1545311542-width660height438.jpg",},
  {id: 3, title: Screens.Map, bgColor: 'green', txtColor: "white", bgImg: "https://cdn.24h.com.vn/upload/4-2018/images/2018-12-21/1545387405-138-1-1545311542-width660height438.jpg",},
  {id: 4, title: Screens.ViewPager, bgColor: 'green', txtColor: "white", bgImg: "https://cdn.24h.com.vn/upload/4-2018/images/2018-12-21/1545387405-138-1-1545311542-width660height438.jpg",},
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  goToScreen (item){
    switch (item.id) {
      case 0:
        //this.props.navigation.navigate(Screens.Demo)
        Alert.alert("Home","Index")
        break;
      case 1:
        this.props.navigation.navigate(Screens.Demo)
        break;
      // case 2:
      //   this.props.navigation.navigate(Screens.Demo)
      //   break;
      case 3:
        this.props.navigation.navigate(Screens.Map)
        break;
      case 4:
        this.props.navigation.navigate(Screens.ViewPager)
        break;
      default:
        break;
    }
  }

  render() {
    const itemList = functionList.map((item, index)=>{
      return(
        <TouchableOpacity
          style={[styles.functionItem, {backgroundColor: item.bgColor}]}
          onPress={()=>this.goToScreen(item)}
        >
          <ImageBackground source={{uri: item.bgImg}} style={styles.imgBg}>
            <Text style={[styles.txtItem, {color: item.txtColor}]}>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )
    });

    return (
      <View style={styles.container}>
        {itemList}
      </View>
    );
  }
}

export default HomeScreen;