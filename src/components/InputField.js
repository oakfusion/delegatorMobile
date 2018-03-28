import React, { Component } from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styled from 'styled-components';


const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20,
    errorColor: '#ef5350',
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

    focus () {
        this.input.focus();
    }

    render () {
        return (
            <TextField {...defaultInputProps}
                ref={input => this.input = input}
                blurOnSubmit={ this.props.onSubmitEditing ? false : true }
                disabled={this.props.disabled}
                label={this.props.label} 
                value={this.props.value} 
                error={this.state.error}
                returnKeyType={this.props.returnKeyType || "next"}
                keyboardType={this.props.keyboardType || "default"}
                onChangeText={ value => this.props.handleChange(value) } 
                onBlur={() => this.validate()}
                onFocus={event => this.props.onFocus ? this.props.onFocus(event) : null}
                onSubmitEditing={() => this.props.onSubmitEditing ? this.props.onSubmitEditing() : null}
            />
        )
    }
}