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
      

         
          <View style={styles.detail}>
            <View style={{ borderColor:"#B1B1B1"}}>
              <TouchableOpacity onPress={this.onClickHandler}>
              <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
              </TouchableOpacity>
              
            </View>
            <View style={{padding:10}}>
            <View >
              <View  style={{padding:5}} >
                <View>
                <Text>Customer</Text>
                </View>
                
                <Text style={styles.textColor}>{this.props.data.customer}</Text>
              </View>
              <View  style={{padding:5}} >
                
                <Text>Company</Text>
                {/* <View style={{flexWrap:"wrap",alignItems:"flex-start",width:"70%"}} > */}
                <View>
                <Text style={styles.textColor}>{this.props.data.company}</Text>
                </View>
                
                {/* </View> */}
                
              </View>
            </View>
            <View
            
            >
              <View  style={{padding:5}}>
                <Text>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View style={{padding:5}} >
                <Text>Hours</Text>
                <Text style={styles.textColor}>{this.props.data.hours}</Text>
              </View>
            </View>
            </View>
            
          </View>
     
      </View>
    );
  }
}
