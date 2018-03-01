import React from 'react';
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

export default DomesticScreenStep1 = (props) => {
    const state = props.screenProps.state;
    const actions = props.screenProps.actions;

    return (
    <Container>
        <ScrollView>
            <FieldHolder placeholder="Data rozpoczęcia delegacji">
                <DatePickerField date={state.startDate} handleChange={actions.setStartDate} placeholder="Wybierz datę"/>
            </FieldHolder>

            <FieldHolder placeholder="Data końca delegacji">
                <DatePickerField date={state.endDate} handleChange={actions.setFinishDate} placeholder="Wybierz datę"/>
            </FieldHolder>

            <FieldHolder placeholder="Data rozliczenia delegacji">
                <DatePickerField date={state.settlementDate} handleChange={actions.setSettlementDate} placeholder="Wybierz datę"/>
            </FieldHolder>

            <FieldHolder placeholder="Pojazd">
                <PickerField 
                    hiddenField 
                    selected={state.venichle} 
                    handleChange={actions.setVenichle} 
                    handleInputChange={actions.setDistance}
                    inputValue={state.distance} 
                    items={data.venichles}/>
            </FieldHolder>
        </ScrollView>
    </Container>
    )
};