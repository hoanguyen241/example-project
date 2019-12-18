import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { connect } from 'react-redux';
import { getNews } from '../../store/demo/actions';
import styles from './styles';

let Button=({getNews})=>(
   <TouchableOpacity style={styles.container} onPress={getNews}>
       <Text  style={styles.txtPress}>Press to see news</Text>
   </TouchableOpacity>
)

const mapDispatchToProps = {
    getNews: getNews,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;