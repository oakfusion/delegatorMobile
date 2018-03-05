import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const ButtonArea = styled(Touchable)`
    flex: 1;
    flex-direction: row;
`;

const ButtonAreaInner = styled.View`
    padding-horizontal: 10;
    padding-vertical: 10;
    background-color: ${props => props.dark ? '#3b3a3e' : '#fff'};
    border-radius: 2;
    margin-bottom: ${props => props.first ? 14 : 0}
`;

const ButtonText = styled.Text`
    text-align: center;
    font-weight: bold;
    color: ${props => props.dark ? '#fff' : '#3b3a3e'};
`;

const Button = (props) => (
    <ButtonArea onPress={props.onPress}>
        <ButtonAreaInner {...props}>
            <ButtonText {...props}>{props.upper ? props.title.toUpperCase() : props.title}</ButtonText>
        </ButtonAreaInner>
    </ButtonArea>
);

export default Button;