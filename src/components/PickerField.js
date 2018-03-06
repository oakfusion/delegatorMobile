import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styled from 'styled-components';

const Container = styled.View`
  margin-horizontal: 0
`;

const defaultInputProps = {
  baseColor: "#c9c9c9",
  textColor: "#fff",
  tintColor: "#ffab40",
  labelHeight: 20
}

export default PickerField = (props) => (
  <Container>
    <Picker
      style={{color: '#fff', borderBottomWidth: 1, borderBottomColor: '#fff'}}
      selectedValue={props.selected}
      onValueChange={itemValue => props.handleChange(itemValue)} >
      {
        props.items.map((item, key) => <Picker.Item key={key} label={item.viewValue} value={item.value} />)
      }
    </Picker>

    {
      props.hiddenField && props.selected && props.selected !== 'COMPANIES'
      ? <TextField 
        {...defaultInputProps}
        keyboardType="numeric"
        label='Liczba przejechanych kilometrów' 
        value={props.inputValue}
        onChangeText={ value => props.handleInputChange(value) }
        />
      : null
    }
  </Container>
)
