import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import NewsItem from '../../components/NewsItem';
import SwitchComponent from '../../components/Switch';
import styles from './styles';
import { connect } from 'react-redux';

class DemoSagaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.btns}>
          <Button />
          <SwitchComponent />
        </View>
        <View style={styles.service}>
          <Loading />
          <NewsItem />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  mode: state.demoReducer.newMode,
})

DemoSagaScreen = connect(mapStateToProps,null)(DemoSagaScreen)

export default DemoSagaScreen;