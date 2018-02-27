import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

export default class AbroadScreenStep1 extends Component {
  render() {
    return (
        <Container>
            <ScrollView>
                <FieldHolder placeholder="Data rozpoczęcia delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy (powrót)">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data końca delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data rozliczenia delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
  } 
}
