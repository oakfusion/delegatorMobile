import React, { Component } from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styled from 'styled-components';


const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20,
    errorColor: '#ef5350'
}

export default class InputField extends Component {
    constructor (props) {
        super(props);
        this.state = { error: '' }
    }

    validate () {
        let error = this.state.error;

         if (this.props.value) {
             error = '';
             this.setState({ error });
             return true;
         } else {
             error = this.props.error;
             this.setState({ error });
             return false;
         }
    }

    render () {
        return (
            <TextField {...defaultInputProps} 
                label={this.props.label} 
                value={this.props.value} 
                error={this.state.error}
                onChangeText={ value => this.props.handleChange(value) } 
                onBlur={() => this.validate()}
            />
        )
    }
}