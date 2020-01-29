import React, { Component } from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
export default class TimeSheetExpandedDetails extends Component {

  state = {
   showSheet: false,
   day : "Monday"
  };

  render() {
    let content;
    if(this.state.showSheet=== true){
        content = (
            this.props.response.map((infoTimeSheets, index) => (
                <Details
                key={index}
                infoTimeSheets={infoTimeSheets}/>
                ))
        )
    }
    content= (
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",padding:10}}>
        <TouchableOpacity day="Monday" {...this.props}>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>M</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>T</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>W</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>T</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>F</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>S</Text>
        </ProgressCircle>
        </TouchableOpacity>

        <TouchableOpacity>
        <ProgressCircle
            percent={100}
            radius={15}
            borderWidth={4}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 11 }}>S</Text>
        </ProgressCircle>
        </TouchableOpacity>
        </View>
        
        

  </View>
    );

    return <View>{content}</View>
  }
}
