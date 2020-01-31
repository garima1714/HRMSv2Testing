import React, { Component } from "react";
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
import { connect } from 'react-redux';
// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

    constructor(props) {
        super(props);
    }


  state = {
   showSheet: true,
   day : "Monday"
  };

  render() {
    let content;
    let contentToShow;
    if(this.state.showSheet=== true){
        contentToShow = (
            this.props.timesheet.map((payload, index) => (
                <Details
                key={index}
                data={payload}/>
                ))
        )
    }
    content= (
<<<<<<< HEAD
=======
        <SafeAreaView>

       
        <View>
        
>>>>>>> 525ce6d89457c0a1b4d304f51ce544c554f51414
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
<<<<<<< HEAD
        <ScrollView style={{marginBottom:100}}>{contentToShow}</ScrollView>
        </View>
=======
        <View style={{borderTopWidth:2, borderColor:"#F4F2F2"}}/>
                </View> 
        <ScrollView>
           
        <View>{contentToShow}</View>
        </ScrollView>
        
  </View>
  </SafeAreaView>
>>>>>>> 525ce6d89457c0a1b4d304f51ce544c554f51414
    );

    return <View>{content}</View>
  }

  
}
mapStateToProps=(state)=> {
    const { days } = state
    return { timesheet: days.payload }
}

export default connect(mapStateToProps)(TimeSheetExpandedDetails)
