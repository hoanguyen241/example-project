import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

let NewsItem = ({ article, newMode }) => (
    article ?
        <View style={ !newMode ? styles.container : styles.night }>
            {
                article.map((item, index) => {
                    return(
                        <View style={styles.item} key={index.toString()}>
                            <Text style={!newMode ? styles.title : styles.titleNight}>{item.title}</Text>
                            <Image style={styles.imgStyle} source={{uri: item.urlToImage}} />
                            <Text style={!newMode ? styles.description: styles.descriptionNight}>{item.description}</Text>
                        </View>
                    )
                })
            }
        </View> 
    : null
);

const mapStateToProps = (state) => ({
    article: state.demoReducer.news,
    newMode: state.demoReducer.newMode,
})

NewsItem = connect(mapStateToProps,null)(NewsItem)

export default NewsItem;