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

export default AbroadMoreDomestic = (props) => (
    <MoreModal {...props}>
        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty noclegów w kraju (w zł)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty komunikacji miejskiej w kraju (w zł)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba śniadań w kraju" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba obiadów w kraju" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba kolacji w kraju" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Dodatkowe koszta części krajowej" />
        </FieldHolder>
    </MoreModal>
);