import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import data from '../data.json';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

export default class DomesticScreenStep1 extends Component {
  render() {
    return (
        <Container>
            <ScrollView>
                <FieldHolder border placeholder="Data rozpoczęcia delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder border placeholder="Data końca delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder border placeholder="Data rozliczenia delegacji">
                    <DatePickerField placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField items={data.venichles}/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
  } 
}
