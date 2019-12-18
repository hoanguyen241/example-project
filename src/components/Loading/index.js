import React from 'react';
import { connect } from 'react-redux';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

let Loading = ({ loading }) => (
    loading ?
        <View style={styles.container}>
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} color='#2073d4' />
            </View>
        </View>
    : null
);

const mapStateToProps = (state) => ({
    loading: state.demoReducer.loading
})

Loading = connect(mapStateToProps,null)(Loading)

export default Loading;