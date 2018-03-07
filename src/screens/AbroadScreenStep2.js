import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
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
                        handleChange={country => actions.updateCountry(country, state.settlementDate)}
                        items={data.countries}
                    />
                </FieldHolder>

                <FieldHolder placeholder="Kurs waluty w dniu rozliczenia">
                    <TextField {...defaultInputProps} label={state.currency ? '' : "Wybierz kraj"} value={state.currency && `${state.currency} zł`}/>
                    {/* <ActivityIndicator animating={state.fetchingCurrency} size="small" color="#fff" /> */}
                    <ActivityIndicator style={{display: 'flex'}} animating={true} size="small" color="#fff" />
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField
                        hiddenField 
                        selected={state.venichle} 
                        handleChange={actions.setVenichle} 
                        handleInputChange={actions.setDistance}
                        inputValue={state.distance} 
                        items={data.venichles}
                        hiddenFor={data.venichles[0]}
                    />
                </FieldHolder>
            </ScrollView>
        </Container>
    );
}
