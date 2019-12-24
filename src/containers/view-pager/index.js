import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ViewPager from '../../components/ViewPager';
import styles from './styles';
import { connect } from 'react-redux';

class ViewPagerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.txtNumber}>{this.props.pageIndex}</Text>
        </View>
        <ViewPager />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    pageIndex: state.getPageValuesReducer.index,
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(Actions, dispatch);
// }
export default connect(mapStateToProps, null)(ViewPagerScreen);