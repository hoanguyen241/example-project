import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Screens } from '../common';
//==============================================================
import Home from '../containers/home';
import Demo from '../containers/demo';
import VideoCallScreen from '../containers/video-call';
import VideoCallAcceptScreen from '../containers/video-call-accept';
import MapScreen from '../containers/map';
  
const homeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            header: null  
        }
    },
    Demo: {
        screen: Demo,
        navigationOptions:{
            header: null  
        }
    },
    VideoCall: {
        screen: VideoCallScreen,
        navigationOptions:{
            header: null  
        }
    },
    VideoCallAccept: {
        screen: VideoCallAcceptScreen,
        navigationOptions:{
            header: null  
        }
    },
    Map: {
        screen: MapScreen,
        navigationOptions:{
            header: null  
        }
    },
}, {initialRouteName: Screens.Home});
  
const rootStack = createSwitchNavigator({
    HomeStack: {
        screen: homeStack,
        navigationOptions:{
            header: null  
        }
    }
    //Other stacks
}, {initialRouteName: 'HomeStack'})
  
export default createAppContainer(rootStack)