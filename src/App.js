import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store/index';
import RootStack from './navigation';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
//-------------------------------------------------------------------

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStore()
    }

    async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log('================fcmToken====================');
        console.log(fcmToken);
        console.log('====================================');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
            console.log('================fcmToken====================');
            console.log(fcmToken);
            console.log('====================================');
        }
    }
  
    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }
  
    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            this.getToken();
        } catch (error) {
            console.log('permission rejected');
        }
    }
  
    async createNotificationListeners() {
        firebase.notifications().onNotification(notification => {
            notification.android.setChannelId('insider').setSound('default')
            firebase.notifications().displayNotification(notification)
        });
    }
  
    componentDidMount() {
        const channel = new firebase.notifications.Android.Channel('insider', 'insider channel', firebase.notifications.Android.Importance.Max)
        firebase.notifications().android.createChannel(channel);
        this.checkPermission();
        this.createNotificationListeners();
    }

    render(){
        return (
            <Provider store={this.store}>
                <StatusBar barStyle="dark-content" />
                <RootStack />
            </Provider>
        );
    }
}

export default App;