'use script';

import React, { PropTypes, Component } from 'react';
import {
  View,
} from 'react-native';
import StyleSheet from '../commons/StyleSheet';

class FavoritePage extends Component {

  constractor(props){
    super(props);
  }

  render(){
    return (
      <View style={[styles.container,]}></View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'red'
  },

})

function mapStoreToProps(store){
  return {
    list : []
  }
}

export default connect(mapStoreToProps)(FavoritePage);
