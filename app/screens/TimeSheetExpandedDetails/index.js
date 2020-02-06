import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert, Modal, TextInput, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation"
import DatePicker from 'react-native-datepicker'
import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

  constructor(props) {
    super(props);

  }
  state = {
    modalVisible: false,
  }
  componentDidMount() {
    const { fetchData } = this.props;
    let data = {
      day: null,
      from: this.props.from,
      to: this.props.to,
    }
    this.props.fetchSheets(data)
  }

  ListAsPerDay = (day) => {

    let data = {
      day: day,
      from: this.props.from,
      to: this.props.to,
    }
    console.log(this.props)
    this.props.fetchSheets(data)
  }

  // clic = async ()  => {
  //   console.log("before call");
  //   const response=  await fetch('http://172.25.123.161:44348/api/values', {
  //   method: 'GET'
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  //   cache: "no-cache",
  //   mode: "cors",
  //   body: "formdata"
  // },
  //   })
  //   console.log(response.json())

  // }

  getAsync = async (URL) => {
    console.log("initial")
    let response = await fetch(URL, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          cache: "no-cache",
          mode: "cors",
          body: "formdata"
        },
    });
    console.log("sdsdafas")
    return response.json();
  };

  state = {
    showSheet: true,
    day: "Monday"
  };

  render() {

    let content;
    let contentToShow;
    if (this.state.showSheet === true) {
      contentToShow = (
        this.props.timesheet.map((payload, index) => (
          <Details
            key={index}
            data={payload}
            {...this.props} />
        ))
      )
    }
    content = (
      <SafeAreaView>


        <View>
          <View style={{ flexDirection: "row", borderWidth: 1, borderColor: 'grey', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <View style={{ width: '50%', padding: 15 }}>
              <Text>Begin Date</Text>
              <DatePicker
                date={this.props.from}
                mode="date"
                // placeholder={this.props.from}
                format="DD-MM-YYYY"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                androidMode='spinner'
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateIcon: {
                    display: "none",
                  },
                  // ... You can check the source to find the other keys.
                }}
              />
            </View>
            <View style={{ width: '50%', padding: 15 }}>
              <Text>End Date</Text>
              <DatePicker

                date={this.props.to}
                mode="date"
                // placeholder={this.props.to}
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                androidMode='spinner'
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateIcon: {
                    display: "none",

                  },
                  // ... You can check the source to find the other keys.
                }} />
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10, borderWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, borderColor: 'grey' }}>
              <TouchableOpacity day="Monday" onPress={() => this.getAsync('https://localhost:5001/api/values')}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Tuesday")}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Wednesday")}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Thrusday")}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Friday")}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Saturday")}>
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

              <TouchableOpacity onPress={() => this.ListAsPerDay("Sunday")}>
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
            <View style={{ borderTopWidth: 2, borderColor: "#F4F2F2" }} />
          </View>
          <ScrollView>

            <View style={{ padding: 20, marginRight: 10, marginBottom: 500 }}>{contentToShow}</View>
          </ScrollView>

        </View>
      </SafeAreaView>
    );

    return <View>{content}</View>
  }
}
mapStateToProps = (state) => {
  const { days } = state
  return { timesheet: days.payload }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheets
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheetExpandedDetails)
