import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { connect } from 'react-redux';
import { getVals } from '../../store/get-page-values/actions';
import styles from './styles';
import ViewPager from '@react-native-community/viewpager';

const pageList = [
    {id: 0, title: "0", bgColor: 'gray', txtColor: "white"},
    {id: 1, title: "1", bgColor: 'gray', txtColor: "white"},
    {id: 2, title: "2", bgColor: 'gray', txtColor: "white"},
    {id: 3, title: "3", bgColor: 'gray', txtColor: "white"},
    {id: 4, title: "4", bgColor: 'gray', txtColor: "white"},
    {id: 5, title: "5", bgColor: 'gray', txtColor: "white"},
]

let ViewPagerComponent = ({getVals}) => {
    return (
        <ViewPager 
            style={styles.viewPager}
            initialPage={0}
            pageMargin={-90}
            onPageSelected={(item)=>{
                //alert(item.nativeEvent.position)}
                getVals(item.nativeEvent.position)
            }}
        >
            {
                pageList.map((item, index)=>{
                    return(
                        <View style={styles.viewItem} key={index}>
                            <View style={styles.viewElement}>
                                <Text style={styles.txtElement}>{item.title}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ViewPager>
    );
};

const mapDispatchToProps = {
    getVals: getVals,
};

ViewPagerComponent = connect(null,mapDispatchToProps)(ViewPagerComponent);

export default ViewPagerComponent;