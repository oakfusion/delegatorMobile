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

export default AbroadMoreDomestic = (props) => {
    const state = props.state;
    const actions = props.actions;
    
    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty noclegów w kraju (w zł)" 
                    value={state.aAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.aAccommodationDomestic} 
                    disabled={state.aAccommodationProvided} 
                    onChangeText={ value => actions.aSetAccommodationDomestic(value)}
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty komunikacji miejskiej w kraju (w zł)" 
                    value={state.aPublicTransportDomestic} 
                    onChangeText={ value => actions.aSetPublicTransportDomestic(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba śniadań w kraju" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aBreakfastCountDomestic} 
                    onChangeText={ value => actions.aSetBreakfastCountDomestic(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba obiadów w kraju" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aDinnerCountDomestic} 
                    onChangeText={ value => actions.aSetDinnerCountDomestic(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba kolacji w kraju" 
                    disabled={state.aAlimentationProvided} 
                    value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aSupperCountDomestic} 
                    onChangeText={ value => actions.aSetSupperCountDomestic(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Dodatkowe koszta części krajowej" 
                    value={state.aAdditionalExpensesDomestic} 
                    onChangeText={ value => actions.aSetAdditionalExpensesDomestic(value) }
                />
            </FieldHolder>
        </MoreModal>
    )
}