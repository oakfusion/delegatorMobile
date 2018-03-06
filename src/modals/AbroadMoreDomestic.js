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

export default AbroadMoreDomestic = (props) => {
    const state = props.state;
    const actions = props.actions;
    
    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty noclegów w kraju (w zł)" 
                    value={state.accommodationProvided ? 'Zapewnione przez pracodawcę' : state.domesticAccommodation} 
                    disabled={state.accommodationProvided} 
                    onChangeText={ value => actions.setAccomodation(value)}
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty komunikacji miejskiej w kraju (w zł)" 
                    value={state.domesticPublicTransport} 
                    onChangeText={ value => actions.setPublicTransport(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba śniadań w kraju" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.domesticBreakfastCount} 
                    onChangeText={ value => actions.setBreakfastCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba obiadów w kraju" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.domesticDinnerCount} 
                    onChangeText={ value => actions.setDinnerCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba kolacji w kraju" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.domesticSupperCount} 
                    onChangeText={ value => actions.setSupperCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Dodatkowe koszta części krajowej" 
                    value={state.abroadAdditionalDomesticExpenses} 
                    onChangeText={ value => actions.setAdditionalExpenses(value) }
                />
            </FieldHolder>
        </MoreModal>
    )
}