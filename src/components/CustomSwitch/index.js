import React from 'react';
import {View, StyleSheet, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../../store/demo/actions';
import styles from './styles';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

CustomSwitch = ({mode}) => {
    let rotateValue = new Animated.Value(0);
    let rotation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "720deg"] // degree of rotation
    });
    let transformStyle = { transform: [{ rotate: rotation }] };

    if(mode){
        Animated.timing(rotateValue, {
            toValue: 10,
            duration: 700,
            easing: Easing.linear
        }).start();
    }
    
    return(
        <Animated.View
            style={[
            StyleSheet.absoluteFill,
            styles.svg,
            transformStyle
            ]}
        >
            <Svg height="110%" width="110%" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    //stroke="red"
                    strokeWidth="2.5"
                    fill="yellow"
                />
                <Rect
                    x= {!mode ? "15" : "25"}
                    y= {!mode ? "15" : "25"}
                    width= {!mode ? "70" : "50"}
                    height= {!mode ? "70" : "50"}
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
        </Animated.View>
    )
}

const mapStateToProps = (state) => ({
    mode: state.demoReducer.newMode,
})

CustomSwitch = connect(mapStateToProps, null)(CustomSwitch);

export default CustomSwitch;