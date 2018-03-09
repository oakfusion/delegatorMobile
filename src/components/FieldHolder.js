import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 100%;
  padding-top: 14;
  padding-horizontal: 15;
  margin-bottom: ${props => props.last ? 14 : 0}
`;

const ContainerInner = styled.View`
  margin-bottom: ${props => props.small ? 0 : 14}
  border-color: #aaa;
  borderBottomWidth: ${props => props.border ? 0.25 : 0}
`;

const Placeholder = styled.Text`
  color: #c9c9c9;
  font-size: 12;
`;

const FieldHolder = (props) => (
    <Container {...props}>
      <ContainerInner {...props}>
        <Placeholder>{props.placeholder}</Placeholder>
        {props.children}
      </ContainerInner>
    </Container>
)

export default FieldHolder;