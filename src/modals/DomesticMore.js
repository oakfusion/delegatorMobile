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

export default DomesticMore = (props) => (
    <MoreModal {...props}>
        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty noclegów" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty komunikacji miejskiej" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba śniadań (zapewnionych przez pracodawcę)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba obiadów (zapewnionych przez pracodawcę)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba kolacji (zapewnionych przez pracodawcę)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Dodatkowe koszta" />
        </FieldHolder>
    </MoreModal>
);