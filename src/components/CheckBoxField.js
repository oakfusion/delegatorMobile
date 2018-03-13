import React, { Component } from 'react';
import CheckBox from 'react-native-modest-checkbox';
import { View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
`;

const errorColor = '#ef5350';
const regularColor = '#fff';

export default class CheckBoxField extends Component {
    constructor (props) {
        super(props);
        this.state = {
            style: {color: regularColor},
            uncheckedComponentError: this.props.uncheckedComponent
        }
    }

    makeWrong () {
        this.setState({
            style: {color: errorColor},
            uncheckedComponentError: this.props.uncheckedComponentError
        });
    }

    makeRight () {
        this.setState({
            style: {color: regularColor},
            uncheckedComponentError: this.props.uncheckedComponent
        });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.checked) {
            this.makeRight()
        }
    }

    validate () {
        if (this.props.required) {
            if (this.props.checked) {
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
                <CheckBox
                    label={this.props.label}
                    labelStyle={this.state.style}
                    checkedComponent={this.props.checkedComponent}
                    uncheckedComponent={this.state.uncheckedComponentError}
                    onChange={this.props.onChange}
                    checked={this.props.checked}
                />
            </Container>
        )
    }
}