import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
// import styles from "./styles";
import { Navigation }  from 'react-native-navigation'
// import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class Details extends Component {
  state = {
    viewDetail: "short",
    status: "",
    title : "TimeSheetDetail",
    response: []
  };

  onClickHandler = () => {
    Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'example.ModalScreen',
              passProps: {
                text: 'stack with one child'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Fill the details'
                  }
                }
              }
            }
          }]
        }
      });
  }

  render() {
        return(
            <View>
         
        
        
      </View>
        );
  }
}
