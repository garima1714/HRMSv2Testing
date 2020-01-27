import React, { Component } from "react";
import {Text, View} from 'react-native'
// import styles from "./styles";
// import push  from '../../services/Navigation/Navigation'

export default class TimeSheetExpandedDetails extends Component {
    onClickHandler = () => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'Testing',
              passProps: {
                text: 'Pushed screen'
              },
              options: {
                topBar: {
                  title: {
                    text: "Hello new screen"
                  }
                }
              }
            }
          });
      }
  state = {
   data: "hello"
  };

  render() {
        
  return(
    <TouchableOpacity >
    <View style={styles.expanded}>
      <View style={styles.day}>
          <Text>{this.state.data}</Text>
      </View>
      <View style={styles.date}>
          <Text>{this.props.date}</Text>
      </View>
  </View>
</TouchableOpacity>
    
  );
  }
}
