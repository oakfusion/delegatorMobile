import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import styled from 'styled-components';


const Container = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    flexDirection: row;
`;

const errorColor = '#ef5350';
const regularColor = '#fff';

export default class CheckBoxField extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color: regularColor
        }
    }

    makeWrong () {
        this.setState({
            color: errorColor
        });
    }

    makeRight () {
        this.setState({
            color: regularColor
        });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.checked) {
            this.makeRight();
        }
        this.forceUpdate();
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
                <Switch
                    onValueChange={this.props.onChange}
                    onTintColor='#d28f3b'
                    thumbTintColor={this.props.checked ? '#ffab40' : null}
                    value={this.props.checked}
                />
                <Text style={{color: this.state.color, paddingLeft: 7, fontSize: 16}}>{this.props.label}</Text>
            </Container>
        )
    }
}