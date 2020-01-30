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
  render() {
    return (
      <View >
        <View>

         
          <View style={styles.detail}>
            <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
              <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
            </View>
            <View>
            <View style={{flexDirection:"row"}}>
              <View >
                <View>
                <Text>Customer</Text>
                </View>
                
                <Text style={styles.textColor}>{this.props.data.customer}</Text>
              </View>
              <View >
                
                <Text>Company</Text>
                {/* <View style={{flexWrap:"wrap",alignItems:"flex-start",width:"70%"}} > */}
                <View>
                <Text style={styles.textColor}>{this.props.data.company}</Text>
                </View>
                
                {/* </View> */}
                
              </View>
            </View>
            <View
             style={{flexDirection:"row"}}
            >
              <View>
                <Text>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View >
                <Text>Hours</Text>
                <Text style={styles.textColor}>{this.props.data.hours}</Text>
              </View>
            </View>
            </View>
            
          </View>
        </View>
      </View>
    );
  }
}
