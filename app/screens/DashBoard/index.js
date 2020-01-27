import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import TimeSheet from '../../components/TimeSheetDetails'
import { Navigation }  from 'react-native-navigation'
class DashBoard extends Component {
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
    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.onClickHandler}>
                    <Text>Hello</Text>
                </TouchableOpacity>
                {/* <Text>Hello</Text>
                <TimeSheet {...this.props}/> */}
            </View>
        )
    }
}

export default connect()(DashBoard);