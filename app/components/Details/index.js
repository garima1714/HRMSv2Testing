import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Navigation }  from 'react-native-navigation'
// import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class Details extends Component {

  render() {
        return(
          <View>
              
          <View style={styles.details}>
              
                  <Text> {this.props.data.from} </Text>
              </View>
      </View>
        );
  }
}
