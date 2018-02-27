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

export default AbroadMoreAbroad = (props) => (
    <MoreModal {...props}>
        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty noclegów zagranicznych (w walucie obowiązującej w danym kraju)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty dojazdów zagranicznych (w walucie obowiązującej w danym kraju)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Koszty zagranicznej komunikacji miejskiej (w walucie obowiązującej w danym kraju)" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba śniadań za granicą" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba obiadów za granicą" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Liczba kolacji za granicą" />
        </FieldHolder>

        <FieldHolder small>
            <TextField {...defaultInputProps} label="Dodatkowe koszta części zagranicznej" />
        </FieldHolder>
    </MoreModal>
);