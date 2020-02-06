import React, { Component } from "react";
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert, Modal,TextInput, Button} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
import { connect } from 'react-redux';
import {Navigation} from "react-native-navigation"
import DatePicker from 'react-native-datepicker'
import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    state = {
        modalVisible: false,
    }
    componentDidMount(){
        const {fetchData} = this.props;
        fetchData();
    }
    setModalVisible = (val) => {
        this.setState({modalVisible:val})
    }
      navigationButtonPressed({ buttonId }) {
        // will be called when "buttonOne" is clicked
        console.log(buttonId)
        this.setState({modalVisible:!this.state.modalVisible })
      }

  state = {
   showSheet: true,
   day : "Monday"
  };

  render() {

    let contentExapand;
    if(this.state.modalVisible){
        contentExapand = (
          <View style={{marginTop: 22, height:'30%'}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible)
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
                  <DatePicker
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
          />
                  <Button title='Submit'></Button>
                </View>
                </ScrollView>
              </View>
            </Modal>
          </View>
        );
      }
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
        <SafeAreaView>

       
        <View>
        
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
        <View style={{borderTopWidth:2, borderColor:"#F4F2F2"}}/>
                </View> 
        <ScrollView>
           
        <View>{contentToShow}</View>
        {contentExapand}
        </ScrollView>
        
  </View>
  </SafeAreaView>
    );

    return <View>{content}</View>
  }

  
}
mapStateToProps=(state)=> {
    const { days } = state
    return { timesheet: days.payload }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetchSheets
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TimeSheetExpandedDetails)
