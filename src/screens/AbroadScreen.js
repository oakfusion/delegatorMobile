import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-modest-checkbox';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FieldHolder from '../components/FieldHolder';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField'
import Button from '../components/Button';
import AbroadMoreDomestic from '../modals/AbroadMoreDomestic';
import AbroadMoreAbroad from '../modals/AbroadMoreAbroad';
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

export default class AbroadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            domesticVisible: false,
            abroadVisible: false
         }
    }

    openModal (modal) {
        this.setState({ [modal]: true });
    }
    
    closeModal (modal) {
        this.setState({ [modal]: false });
    }

    render() {
        const state = this.props.state;
        const actions = this.props.actions;

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

                    <FieldHolder border placeholder="Kraj">
                        <PickerField
                            selected={state.aCountry} 
                            handleChange={country => actions.aUpdateCountry(country, state.aSettlementDate)}
                            items={data.countries}
                        />
                    </FieldHolder>

                    {
                        state.aCountry
                        ? <FieldHolder placeholder="Kurs waluty w dniu rozliczenia">
                            {
                                state.aFetchingCurrency 
                                ? <ActivityIndicator animating={true} size="small" style={{marginVertical: 20}} color="#fff" />
                                : <TextField {...defaultInputProps} disabled={true} label={state.aCurrency ? '' : "Wybierz kraj"} value={state.aCurrency && `${state.aCurrency} zł`}/> 
                            }
                        </FieldHolder>
                        : null
                    }

                    <FieldHolder small placeholder="Pojazd">
                        <PickerField
                            hiddenField 
                            selected={state.aVenichle} 
                            handleChange={actions.aSetVenichle} 
                            handleInputChange={actions.aSetDistance}
                            inputValue={state.aDistance} 
                            items={data.venichles}
                            hiddenFor={[data.venichles[0].value, data.venichles[1].value]}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Adres email' value={state.aEmail} onChangeText={ value => actions.aSetEmail(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Imię' value={state.aName} onChangeText={ value => actions.aSetName(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Nazwisko' value={state.aSurname} onChangeText={ value => actions.aSetSurname(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Stanowisko' value={state.aPosition} onChangeText={ value => actions.aSetPosition(value) }/>
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAlimentationProvided(value.checked)}
                            checked={state.aAlimentationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAccommodationProvided(value.checked)}
                            checked={state.aAccommodationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetRegulaminAccepted(value.checked)}
                            checked={state.aRegulaminAccepted}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <Button dark title="Dodatkowe opcje części krajowej" onPress={() => this.openModal('domesticVisible')}/>
                    </FieldHolder>

                    <FieldHolder small>
                        <Button dark title="Dodatkowe opcje części zagranicznej" onPress={() => this.openModal('abroadVisible')}/>
                    </FieldHolder>

                    <FieldHolder small last>
                        <Button title="Wyślij"/>
                    </FieldHolder>
                </ScrollView>

                <AbroadMoreDomestic actions={actions} state={state} visibility={this.state.domesticVisible} handleClose={() => this.closeModal('domesticVisible')}/>
                <AbroadMoreAbroad actions={actions} state={state} visibility={this.state.abroadVisible} handleClose={() => this.closeModal('abroadVisible')}/>
            </Container>
        );
    }
}
