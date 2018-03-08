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
                        selected={state.aCountry} 
                        handleChange={country => actions.aUpdateCountry(country, state.aSettlementDate)}
                        items={data.countries}
                    />
                </FieldHolder>

                <FieldHolder placeholder="Kurs waluty w dniu rozliczenia">
                    {
                        state.aFetchingCurrency 
                        ? <ActivityIndicator animating={true} size="small" style={{marginVertical: 20}} color="#fff" />
                        : <TextField {...defaultInputProps} label={state.aCurrency ? '' : "Wybierz kraj"} value={state.aCurrency && `${state.aCurrency} zł`}/> 
                    }
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField
                        hiddenField 
                        selected={state.aVenichle} 
                        handleChange={actions.aSetVenichle} 
                        handleInputChange={actions.aSetDistance}
                        inputValue={state.aDistance} 
                        items={data.venichles}
                        hiddenFor={[data.venichles[0].value, data.venichles[1].value]}
                    />
                </FieldHolder>
            </ScrollView>
        </Container>
    );
}
