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
    labelHeight: 20
}

export default DomesticMore = (props) => {
    const state = props.state;
    const actions = props.actions;
    
    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} label="Koszty noclegów" value={state.domesticAccommodation} onChangeText={ value => actions.setAccomodation(value) }/>
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} label="Koszty komunikacji miejskiej" value={state.domesticPublicTransport} onChangeText={ value => actions.setPublicTransport(value) }/>
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} label="Liczba śniadań (zapewnionych przez pracodawcę)" value={state.domesticBreakfastCount} onChangeText={ value => actions.setBreakfastCount(value) }/>
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} label="Liczba obiadów (zapewnionych przez pracodawcę)" value={state.domesticDinnerCount} onChangeText={ value => actions.setDinnerCount(value) }/>
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} label="Liczba kolacji (zapewnionych przez pracodawcę)" value={state.domesticSupperCount} onChangeText={ value => actions.setSupperCount(value) }/>
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} label="Dodatkowe koszta" value={state.domesticAdditionalExpenses} onChangeText={ value => actions.setAdditionalExpenses(value) }/>
            </FieldHolder>
        </MoreModal>
    )
};