import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FieldHolder from '../components/FieldHolder';
import PickerField from '../components/PickerField';
import DatePickerField from '../components/DatePickerField';
import CheckBoxField from '../components/CheckBoxField';
import InputField from '../components/InputField';

import { formatDate, formatDateTime } from '../helpers/format';

import Button from '../components/Button';
import DomesticMore from '../modals/DomesticMore';
import * as data from '../data.json';


const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

export default class DomesticScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalVisible: false
        }
    }

    openModal () {
        this.setState({ modalVisible: true });
    }
    
    closeModal () {
        this.setState({ modalVisible: false });
    }

    validate (items) {
        let validate = [];

        for (let item in items) {
            validate.push(this.refs[item].validate());
        }

        if (validate.every(item => item)) {

            const data = {
                start:                      formatDateTime(this.props.state.dStartDate),
                end:                        formatDateTime(this.props.state.dEndDate),
                settlementDate:             formatDate(this.props.state.dSettlementDate),
                domesticAccommodation:      this.props.state.dAccommodation,
                domesticPublicTransport:    this.props.state.dPublicTransport,
                domesticBreakfastCount:     this.props.state.dBreakfastCount,
                domesticDinnerCount:        this.props.state.dDinnerCount,
                domesticSupperCount:        this.props.state.dSupperCount,
                name:                       this.props.state.dName,
                surname:                    this.props.state.dSurname,
                position:                   this.props.state.dPosition,
                city:                       this.props.state.dCity,
                carType:                    this.props.state.dVenichle,
                kilometers:                 this.props.state.dDistance,
                alimentationProvided:       this.props.state.dAlimentationProvided,
                accommodationProvided:      this.props.state.dAccommodationProvided,
                domesticAdditionalExpenses: this.props.state.dAdditionalExpenses,
                email:                      this.props.state.dEmail,
                abroad:                     this.props.state.abroad
            }

            this.props.actions.sendData(data).then( () => {
                this.props.navigation.navigate('Pdf', { uuid: this.props.state.dUuid }) 
            });
        }
    }

    render() {
        const state = this.props.state;
        const actions = this.props.actions;
        const errors = this.state.errors;

        return (
            <Container>
                <ScrollView>
                    <FieldHolder placeholder="Data rozpoczęcia delegacji">
                        <DatePickerField 
                            required
                            ref="startDate"
                            date={state.dStartDate} 
                            mode="datetime" 
                            handleChange={actions.dSetStartDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data końca delegacji">
                        <DatePickerField 
                            required
                            ref="endDate"
                            date={state.dEndDate} 
                            mode="datetime" 
                            min={state.dStartDate} 
                            handleChange={actions.dSetEndDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data rozliczenia delegacji">
                        <DatePickerField 
                            required
                            ref="settlementDate"
                            date={state.dSettlementDate} 
                            mode="date" 
                            min={state.dEndDate} 
                            max={state.dEndDate} 
                            handleChange={actions.dSetSettlementDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder small placeholder="Pojazd">
                        <PickerField 
                            hiddenField 
                            required
                            ref="venichle"
                            selected={state.dVenichle} 
                            handleChange={actions.dSetVenichle} 
                            handleInputChange={actions.dSetDistance}
                            inputValue={state.dDistance} 
                            items={data.venichles}
                            hiddenFor={[data.venichles[0].value, data.venichles[1].value]}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="city"
                            label='Miasto'
                            value={state.dCity} 
                            error='Nie może być puste'
                            handleChange={ value => actions.dSetCity(value) } 
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="email"
                            label='Adres email' 
                            value={state.dEmail} 
                            error='Nie może być puste'
                            handleChange={ value => actions.dSetEmail(value) } 
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="name"
                            label='Imię' 
                            value={state.dName} 
                            error='Nie może być puste'
                            handleChange={ value => actions.dSetName(value) } 
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="surname"
                            label='Nazwisko' 
                            value={state.dSurname} 
                            error='Nie może być puste'
                            handleChange={ value => actions.dSetSurname(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="position"
                            label='Stanowisko' 
                            value={state.dPosition} 
                            error='Nie może być puste'
                            handleChange={ value => actions.dSetPosition(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.dSetAlimentationProvided(value.checked)}
                            checked={state.dAlimentationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.dSetAccomodationProvided(value.checked)}
                            checked={state.dAccommodationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            required
                            ref='regulation'
                            label='Zapoznałem się i akceptuję regulamin*'
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            uncheckedComponentError={<Icon name="checkbox-blank-outline" size={22} color="#ef5350"/>}
                            onChange={ value => (actions.dSetRegulaminAccept(value.checked))}
                            checked={state.dRegulaminAccepted}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <Button dark title="Dodatkowe opcje" onPress={() => this.openModal()}/>
                    </FieldHolder>

                    <FieldHolder small last>
                        <Button title="Wyślij" onPress={() => this.validate(this.refs)}/>
                    </FieldHolder>

                </ScrollView>

                <DomesticMore state={state} actions={actions} visibility={this.state.modalVisible} handleClose={() => this.closeModal()}/>
            </Container>
        );
    }
}