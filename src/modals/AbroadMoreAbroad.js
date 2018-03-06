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

export default AbroadMoreAbroad = (props) => {
    const state = props.state;
    const actions = props.actions;

    return (
        <MoreModal {...props}>
            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty noclegów zagranicznych (w walucie obowiązującej w danym kraju)" 
                    value={state.accommodationProvided ? 'Zapewnione przez pracodawcę' : state.abroadAccommodation} 
                    disabled={state.accommodationProvided} 
                    onChangeText={ value => actions.setAbroadAccomodation(value)}
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty dojazdów zagranicznych (w walucie obowiązującej w danym kraju)" 
                    value={state.abroadAccess} 
                    onChangeText={ value => actions.setAbroadAccess(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Koszty zagranicznej komunikacji miejskiej (w walucie obowiązującej w danym kraju)"
                    value={state.abroadPublicTransport} 
                    onChangeText={ value => actions.setAbroadPublicTransport(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba śniadań za granicą" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.abroadBreakfastCount} 
                    onChangeText={ value => actions.setAbroadBreakfastCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba obiadów za granicą" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.abroadDinnerCount} 
                    onChangeText={ value => actions.setAbroadDinnerCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Liczba kolacji za granicą" 
                    disabled={state.alimentationProvided} 
                    value={state.alimentationProvided ? 'Zapewnione przez pracodawcę' : state.abroadSupperCount} 
                    onChangeText={ value => actions.setAbroadSupperCount(value) }
                />
            </FieldHolder>

            <FieldHolder small>
                <TextField {...defaultInputProps} 
                    label="Dodatkowe koszta części zagranicznej"
                    value={state.abroadAdditionalAbroadExpenses} 
                    onChangeText={ value => actions.setAbroadAdditionalExpenses(value) }
                />
            </FieldHolder>
        </MoreModal>
    );
};