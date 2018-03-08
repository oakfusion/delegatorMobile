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
                    <DatePickerField date={state.aStartDate} mode="datetime" handleChange={actions.aSetStartDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy">
                    <DatePickerField date={state.aBorderCross} mode="datetime" min={state.aStartDate} handleChange={actions.aSetBorderCross} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data przekroczenia granicy (powrót)">
                    <DatePickerField date={state.aBorderCrossReturn} mode="datetime" min={state.aBorderCross} handleChange={actions.aSetBorderCrossReturn} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data końca delegacji">
                    <DatePickerField date={state.aEndDate} mode="datetime" min={state.aBorderCrossReturn} handleChange={actions.aSetEndDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data rozliczenia delegacji">
                    <DatePickerField date={state.aSettlementDate} mode="date" min={state.aEndDate} max={state.aEndDate} handleChange={actions.aSetSettlementDate} placeholder="Wybierz datę"/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
}