import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components';
import MoreModal from './MoreModal';
import FieldHolder from '../components/FieldHolder';
import { TextField } from 'react-native-material-textfield';

const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20,
    keyboardType: 'numeric'
}

export default AbroadMoreAbroad = (props) => {
    const state = props.state;
    const actions = props.actions;

    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty noclegów zagranicznych (w walucie obowiązującej w danym kraju)" 
                    value={state.aAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.aAccommodationAbroad} 
                    disabled={state.aAccommodationProvided} 
                    onChangeText={ value => actions.aSetAccommodationAbroad(value)}
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty dojazdów zagranicznych (w walucie obowiązującej w danym kraju)" 
                    value={state.aAccessAbroad} 
                    onChangeText={ value => actions.aSetAccessAbroad(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty zagranicznej komunikacji miejskiej (w walucie obowiązującej w danym kraju)"
                    value={state.aPublicTransportAbroad} 
                    onChangeText={ value => actions.aSetPublicTransportAbroad(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba śniadań za granicą" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aBreakfastCountAbroad} 
                    onChangeText={ value => actions.aSetBreakfastCountAbroad(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba obiadów za granicą" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aDinnerCountAbroad} 
                    onChangeText={ value => actions.aSetDinnerCountAbroad(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba kolacji za granicą" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aSupperCountAbroad} 
                    onChangeText={ value => actions.aSetSupperCountAbroad(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Dodatkowe koszta części zagranicznej"
                    value={state.aAdditionalExpensesAbroad} 
                    onChangeText={ value => actions.aSetAdditionalExpensesAbroad(value) }
                />
            </FieldHolder>
        </MoreModal>
    );
};