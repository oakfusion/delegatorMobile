import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FieldHolder from '../components/FieldHolder';
import PickerField from '../components/PickerField';
import DatePickerField from '../components/DatePickerField';
import Button from '../components/Button';
import DomesticMore from '../modals/DomesticMore';
import * as data from '../data.json';


const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20
}

export default class DomesticScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false }
    }

    openModal () {
        this.setState({ modalVisible: true });
    }
    
    closeModal () {
        this.setState({ modalVisible: false });
    }

    validate () {

    }

    render() {
        const state = this.props.state;
        const actions = this.props.actions;

        return (
            <Container>
                <ScrollView>
                    <FieldHolder placeholder="Data rozpoczęcia delegacji">
                        <DatePickerField date={state.dStartDate} mode="datetime" handleChange={actions.dSetStartDate} placeholder="Wybierz datę"/>
                    </FieldHolder>

                    <FieldHolder placeholder="Data końca delegacji">
                        <DatePickerField date={state.dEndDate} mode="datetime" min={state.dStartDate} handleChange={actions.dSetEndDate} placeholder="Wybierz datę"/>
                    </FieldHolder>

                    <FieldHolder placeholder="Data rozliczenia delegacji">
                        <DatePickerField date={state.dSettlementDate} mode="date" min={state.dEndDate} max={state.dEndDate} handleChange={actions.dSetSettlementDate} placeholder="Wybierz datę"/>
                    </FieldHolder>

                    <FieldHolder small placeholder="Pojazd">
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

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Adres email' value={state.dEmail} onChangeText={ value => actions.dSetEmail(value) } ref='aaaa' onBlur={() => console.log(this.refs.aaaa)}/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Imię' value={state.dName} onChangeText={ value => actions.dSetName(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Nazwisko' value={state.dSurname} onChangeText={ value => actions.dSetSurname(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Stanowisko' value={state.dPosition} onChangeText={ value => actions.dSetPosition(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.dSetAlimentationProvided(value.checked)}
                            checked={state.dAlimentationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.dSetAccomodationProvided(value.checked)}
                            checked={state.dAccommodationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.dSetRegulaminAccept(value.checked)}
                            checked={state.dRegulaminAccepted}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <Button dark title="Dodatkowe opcje" onPress={() => this.openModal()}/>
                    </FieldHolder>

                    <FieldHolder small last>
                        <Button title="Wyślij"/>
                    </FieldHolder>

                </ScrollView>

                <DomesticMore state={state} actions={actions} visibility={this.state.modalVisible} handleClose={() => this.closeModal()}/>
            </Container>
        );
    }
}