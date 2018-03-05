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

export default AbroadScreenStep1 = (props) => {
    const state = props.screenProps.state;
    const actions = props.screenProps.actions;

    return (
        <Container>
            <ScrollView>
                <FieldHolder placeholder="Data rozpoczęcia delegacji">
                    <DatePickerField date={state.startDate} handleChange={actions.setStartDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy">
                    <DatePickerField date={state.borderCross} handleChange={actions.setBorderCross} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy (powrót)">
                    <DatePickerField date={state.borderCrossReturn} handleChange={actions.setBorderCrossReturn} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data końca delegacji">
                    <DatePickerField date={state.endDate} handleChange={actions.setFinishDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data rozliczenia delegacji">
                    <DatePickerField date={state.settlementDate} handleChange={actions.setSettlementDate} placeholder="Wybierz datę"/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
}