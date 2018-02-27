import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DatePickerField extends Component {
  constructor(props){
    super(props)
    this.state = { date:"" }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <DatePicker
          style={{width: '100%', paddingTop: 0}}
          date={this.state.date}
          mode="datetime"
          androidMode="spinner"
          format="YYYY-MM-DD h:mm"
          confirmBtnText="Confirm"
          iconComponent={<Icon name="perm-contact-calendar" size={20} color="#fff"/>}
          cancelBtnText="Cancel"
          ref={(picker) => { this.datePicker = picker }}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginRight: 10,
              borderWidth: 0,
              borderBottomWidth: 0.25,
            },
            dateText: {
              color: '#fff',
              fontSize: 16
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});