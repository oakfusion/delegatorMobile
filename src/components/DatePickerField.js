import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
`;

export default DatePickerField = (props) => (
  <Container>
    <DatePicker
      style={{width: '100%', paddingTop: 0}}
      date={props.date}
      placeholder={props.placeholder}
      mode={props.mode}
      minDate={props.min || undefined}
      maxDate={props.max || undefined}
      androidMode="spinner"
      is24Hour={true}
      format={props.mode === "date" ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm"}
      confirmBtnText="Confirm"
      iconComponent={<Icon name="perm-contact-calendar" size={20} color="#fff"/>}
      cancelBtnText="Cancel"
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
      onDateChange={props.handleChange}
    />
  </Container>
)