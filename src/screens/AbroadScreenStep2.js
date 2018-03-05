import React, { Component } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
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

export default AbroadScreenStep2 = (props) => {
    const state = props.screenProps.state;
    const actions = props.screenProps.actions;

    return (
        <Container>
            <ScrollView>
                <FieldHolder border placeholder="Kraj">
                    <PickerField  
                        selected={state.country} 
                        handleChange={actions.setCountry}
                        items={data.countries}
                    />
                </FieldHolder>

                <FieldHolder placeholder="Kurs waluty w dniu rozliczenia">
                    <TextField {...defaultInputProps} label="Wybierz kraj" value={state.email}/>
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField
                        hiddenField 
                        selected={state.venichle} 
                        handleChange={actions.setVenichle} 
                        handleInputChange={actions.setDistance}
                        inputValue={state.distance} 
                        items={data.venichles}
                    />
                </FieldHolder>
            </ScrollView>
        </Container>
    );
}
