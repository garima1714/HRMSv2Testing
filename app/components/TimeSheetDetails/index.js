import React, { Component } from 'react';
import {View, Text, Dimensions} from "react-native";
// import { styles } from './styles';

var width = Dimensions.get("window").width;

export class TimeSheet extends Component {
    state = {
       viewDetail: "short",
       status: ""   
    }

    // onClickHandler = () => {
    //     gotoScreen(this.props.componentId, {
    //         component: {
    //           name: 'LeaveRequestView',
    //         }
    //     });
    // }

    render() {
        return(
            <View >
            <View>
                <View>
                   <Text>TimeSheet</Text>
    <Text>{this.props.status}</Text>
                </View>
                
            </View>
        </View>
        )
        
    }

    
}