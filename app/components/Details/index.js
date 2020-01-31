import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import styles from "./styles";
import { Navigation } from "react-native-navigation";
// import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class Details extends Component {
  onClickHandler = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'ModalScreen',
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Entry'
                }
              }
            }
          }
        }]
      }
    });
  }
  render() {
    return (
      <View >
<<<<<<< HEAD
      

         
          <View style={styles.detail}>
            <View style={{ borderColor:"#B1B1B1"}}>
              <TouchableOpacity onPress={this.onClickHandler}>
=======
        <View style={{flexDirection:"row"}}>
 
        <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
>>>>>>> 525ce6d89457c0a1b4d304f51ce544c554f51414
              <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
              </TouchableOpacity>
              
            </View>
<<<<<<< HEAD
            <View style={{padding:10}}>
            <View >
              <View  style={{padding:5}} >
=======
          <View style={styles.detail}>
            {/* <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
              <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
            </View> */}
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,width:"73%"}}>
              <View >
>>>>>>> 525ce6d89457c0a1b4d304f51ce544c554f51414
                <View>
                <Text style={styles.headingColor}>Customer</Text>
                </View>
                
                <Text style={styles.textColor}>{this.props.data.customer}</Text>
              </View>
              <View  style={{padding:5}} >
                
                <Text style={styles.headingColor}>Company</Text>
                {/* <View style={{flexWrap:"wrap",alignItems:"flex-start",width:"70%"}} > */}
                <View>
                <Text style={styles.textColor}>{this.props.data.company}</Text>
                </View>
                
                {/* </View> */}
                
              </View>
            </View>
            <View
            
            >
<<<<<<< HEAD
              <View  style={{padding:5}}>
                <Text>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View style={{padding:5}} >
                <Text>Hours</Text>
=======
              <View>
                <Text style={styles.headingColor}>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View >
                <Text style={styles.headingColor}>Hours</Text>
>>>>>>> 525ce6d89457c0a1b4d304f51ce544c554f51414
                <Text style={styles.textColor}>{this.props.data.hours}</Text>
              </View>
            </View>
            </View>
            
          </View>
     
      </View>
    );
  }
}
