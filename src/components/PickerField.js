import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styled from 'styled-components';

const Container = styled.View`
  margin-horizontal: 0
`;

const ContainerInner = styled.View`
  border-bottom-width: ${props => props.border.width}
  border-bottom-color: ${props => props.border.color}
`;

const defaultInputProps = {
  baseColor: "#c9c9c9",
  textColor: "#fff",
  tintColor: "#ffab40",
  labelHeight: 50
}

const errorColor = '#ef5350';
const regularColor = '#fff';
const borderColor = '#ccc';

export default class PickerField extends Component {
  constructor (props) {
		super(props);
		this.state = {
			color: regularColor,
      border: { width: 0.25, color: borderColor }
		}
	}
  
	makeWrong () {
		this.setState({
			color: errorColor,
			border: { width: 2, color: errorColor }
    });
	}
	
	makeRight () {
		this.setState({
			color: regularColor,
			border: { width: 0.25, color: borderColor }
    });
	}
	
	componentWillReceiveProps (nextProps) {
		if (nextProps.selected) {
			this.makeRight()
		}
	}
	
	validate () {
		if (this.props.required) {
      if (this.props.selected) {
        this.makeRight();
        return true;
      } else {
          this.makeWrong();
          return false
      }
		}
  }
  
  render () {
    return (
      <Container>
        <ContainerInner border={this.state.border}>
          <Picker
            style={{color: this.state.color}}
            selectedValue={this.props.selected}
            onValueChange={itemValue => this.props.handleChange(itemValue)} >
            {
              this.props.items.map((item, key) => <Picker.Item key={key} label={item.viewValue} value={item.value} />)
            }
          </Picker>
        </ContainerInner>
    
        {
          this.props.hiddenField && this.props.selected && (this.props.hiddenFor.indexOf(this.props.selected) !== 1)
          ? <TextField 
              {...defaultInputProps}
              keyboardType="numeric"
              label='Liczba przejechanych kilometrów' 
              value={this.props.inputValue}
              onChangeText={ value => this.props.handleInputChange(value) }
            />
          : null
        }
      </Container>
    )
  }
}