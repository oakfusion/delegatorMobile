import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import data from '../data.json';
import { TextField } from 'react-native-material-textfield';

const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20,
    disabled: true
}

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const RegularTextInput = styled.TextInput`
    color: #fff;
`;

export default class AbroadScreenStep2 extends Component {
  render() {
    return (
        <Container>
            <ScrollView>
                <FieldHolder border placeholder="Kraj">
                    <PickerField items={data.countries}/>
                </FieldHolder>

                <FieldHolder placeholder="Kurs waluty w dniu rozliczenia">
                    <TextField {...defaultInputProps} label="Wybierz kraj" />
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField hiddenField items={data.venichles}/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
  } 
}
