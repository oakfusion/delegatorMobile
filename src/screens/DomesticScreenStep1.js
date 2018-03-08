import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import data from '../data.json';

import t from 'tcomb-form-native';  

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

export default class DomesticScreenStep1 extends Component {
    onPress = () => console.log(this.refs.form.getValue());

    render () {
        const state = this.props.screenProps.state;
        const actions = this.props.screenProps.actions;

        const Form = t.form.Form;
        const Test = t.struct({
            start: t.String,
            end: t.String,
            settlement: t.String,
            venichle: t.String
        });

        const Start = () => (
            <FieldHolder placeholder="Data rozpoczęcia delegacji">
                <DatePickerField date={state.dStartDate} mode="datetime" handleChange={actions.dSetStartDate} placeholder="Wybierz datę"/>
            </FieldHolder>
        );

        const End = () => (
            <FieldHolder placeholder="Data końca delegacji">
                <DatePickerField date={state.dEndDate} mode="datetime" min={state.dStartDate} handleChange={actions.dSetEndDate} placeholder="Wybierz datę"/>
            </FieldHolder>
        );

        const Settlement = () => (
            <FieldHolder placeholder="Data rozliczenia delegacji">
                <DatePickerField date={state.dSettlementDate} mode="date" min={state.dEndDate} max={state.dEndDate} handleChange={actions.dSetSettlementDate} placeholder="Wybierz datę"/>
            </FieldHolder>
        )

        const Venichle = () => (
            <FieldHolder placeholder="Pojazd">
                <PickerField 
                    hiddenField 
                    selected={state.dVenichle} 
                    handleChange={actions.dSetVenichle} 
                    handleInputChange={actions.dSetDistance}
                    inputValue={state.dDistance} 
                    items={data.venichles}
                    hiddenFor={[data.venichles[0].value, data.venichles[1].value]}
                />
            </FieldHolder>
        );

        const options = {
            fields: {
                start:      { template: Start },
                end:        { template: End },
                settlement: { template: Settlement },
                venichle:   { template: Venichle }
            }
        };

        return (
            <Container>
                <ScrollView>
                    <Form
                        ref="form"
                        type={Test}
                        // options={options}
                    />

                    <Button title="Press here!" onPress={this.onPress} />
                </ScrollView>
            </Container>
        )
    }
};