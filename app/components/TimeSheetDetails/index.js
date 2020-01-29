import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Navigation }  from 'react-native-navigation'
import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class TimeSheet extends Component {
  state = {
    viewDetail: "short",
    status: "",
    title : "TimeSheetDetail",
    response: []
  };

   onClickHandler = () => {
    Navigation.push(this.props.componentId, {
        component: {
          name: 'TimeSheetExpandedDetails',
          passProps: {
            text: 'Pushed screen',
            response: this.state.response
          },
           options: {
            topBar: {
              title: {
                text: "TimeSheet Details"
              }
            }
          }
        }
      });
  }

  render() {
        let TimeSheetRender;
        let content;
        // if(this.state.viewDetail== "expand"){
        //     content = (
                // this.state.response.map((infoTimeSheets, index) => (
                //     <TimeSheetExpand
                //     key={index}
                //     infoTimeSheets={infoTimeSheets}/>
                //     ))
        //         //  <TimeSheetExpand {...this.props}/>
        //          <TouchableOpacity onPress={this.onClickHandler} {...this.props}>
        //         <View style={styles.expanded}>
        //           <View style={styles.day}>
        //               <Text>{this.props.day} Hello</Text>
        //           </View>
        //           <View style={styles.date}>
        //               <Text>{this.props.date}</Text>
        //           </View>
        //       </View>
        //     </TouchableOpacity>
                
        //     )
        // }
        return(
            <View>
          <ScrollView>
          <View style={{flexDirection:"row"}}>
              <View style={styles.type}><Text style={styles.typeContent}>Timesheet</Text></View>
              <View style={styles.status}></View>
          </View>
          <TouchableOpacity onPress={this.onClickHandler}>
         
          <View>
              
              <View style={styles.details}>
                  <View style={styles.from}>
                      <Text>From</Text>
                      <Text> {this.props.From} </Text>
                  </View>
                  <View style={styles.to}>
                      <Text>To</Text>
                      <Text> {this.props.To}</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>
        <View>{content}</View>
          </ScrollView>
        
      </View>
        );
  }
}
