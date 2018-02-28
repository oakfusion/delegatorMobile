import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
`;

export default class DatePickerField extends Component {
  render() {
    console.log(this);
    return (
      <Container>
        <DatePicker
          style={{width: '100%', paddingTop: 0}}
          date={this.props.date}
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
          onDateChange={this.props.handleChange.bind(this)}
        />
      </Container>
    );
  }
}