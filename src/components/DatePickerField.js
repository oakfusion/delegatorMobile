import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, View, Text } from 'react-native';
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
          style={{width: '100%', paddingTop: 10}}
          date={this.state.date}
          mode="datetime"
          placeholder={this.props.placeholder}
          androidMode="spinner"
          format="YYYY-MM-DD h:mm"
          confirmBtnText="Confirm"
          iconComponent={<Icon name="perm-contact-calendar" size={20} color="#fff"/>}
          cancelBtnText="Cancel"
          customStyles={{
            dateTouchBody: {
              marginRight: 18
            },
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 18,
              marginRight: 10,
              borderWidth: 0,
              borderBottomWidth: 0
            },
            dateText: {
              color: '#fff'
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