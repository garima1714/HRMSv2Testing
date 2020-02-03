import React, { Component } from "react";
import {
  TouchableHighlight,
  Alert,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Button,
  Modal
} from "react-native";
import styles from "./styles";
import { Navigation } from "react-native-navigation";
// import ModalSheet from '../Modal';
import DatePicker from 'react-native-datepicker'
var width = Dimensions.get("window").width;
// import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class Details extends Component {
  state = {
    modalVisible: false,
    opacity: 1,
    expand: false
  };

  setModalVisible(visible,opacity) {
    
    this.setState({modalVisible: visible, opacity: opacity});
  }
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
    let content;
    if(this.state.modalVisible){
      content = (
        <View style={{marginTop: 22, height:'30%'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible,1)
            }}>
            <View style={{marginTop: 22,
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'white',
            width:'70%',
            height:'50%',
            marginLeft:'15%',
            marginRight:'20%',
            marginTop:150,
            borderRadius:30
            }}>
              <ScrollView>
              <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <Text>Customer</Text>
                <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
                <Text>Company</Text>
                <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
                <Text>Project</Text>
                <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
                <Text>Hours</Text>
                <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
                {/* <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        /> */}
                <Button title='Submit'></Button>
              </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
      );
    }
    
    return (
      <View >
        <View style={{flexDirection:"row"}}>
 
        <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
            <TouchableOpacity onPress={()=>{
              this.setModalVisible(true,0.5)
            }} >
            <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
            </TouchableOpacity>
            
              
              {/* </TouchableOpacity> */}
              
            </View>
            {content}
          <View style={styles.detail}>
            {/* <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
              <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
            </View> */}
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,width:"80%"}}>
              <View >
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
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,width:"65%"}}>
              <View>
                <Text style={styles.headingColor}>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View >
                <Text style={styles.headingColor}>Hours</Text>
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
