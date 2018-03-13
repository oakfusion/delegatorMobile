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

export default DomesticMore = (props) => {
    const state = props.state;
    const actions = props.actions;
    
    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty noclegów" 
                    value={state.dAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.dAccommodation} 
                    disabled={state.dAccommodationProvided} 
                    onChangeText={ value => actions.dSetAccomodation(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty komunikacji miejskiej" 
                    value={state.dPublicTransport} 
                    onChangeText={ value => actions.dSetPublicTransport(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba śniadań (zapewnionych przez pracodawcę)"
                    disabled={state.dAlimentationProvided} 
                    value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dBreakfastCount} 
                    onChangeText={ value => actions.dSetBreakfastCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba obiadów (zapewnionych przez pracodawcę)" 
                    disabled={state.dAlimentationProvided} 
                    value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dDinnerCount} 
                    onChangeText={ value => actions.dSetDinnerCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba kolacji (zapewnionych przez pracodawcę)" 
                    disabled={state.dAlimentationProvided} 
                    value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dSupperCount} 
                    onChangeText={ value => actions.dSetSupperCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Dodatkowe koszta" 
                    value={state.dAdditionalExpenses} 
                    onChangeText={ value => actions.dSetAdditionalExpenses(value) }
                />
            </FieldHolder>
        </MoreModal>
    )
};