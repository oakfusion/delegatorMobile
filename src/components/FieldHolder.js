import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  border-color: #777;
  padding-top: 14;
  padding-bottom: ${props => props.small ? 0 : 14}
  padding-horizontal: 15;
  borderBottomWidth: ${props => props.border ? 1 : 0}
  margin-bottom: ${props => props.last ? 14 : 0}
`;

const Placeholder = styled.Text`
  color: #c9c9c9;
  font-size: 12;
`;

const FieldHolder = (props) => (
    <Container {...props}>
        <Placeholder>{props.placeholder}</Placeholder>
        {props.children}
    </Container>
)

export default FieldHolder;