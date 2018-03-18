import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FieldHolder from '../components/FieldHolder';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import CheckBoxField from '../components/CheckBoxField';
import InputField from '../components/InputField';

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
                        <DatePickerField 
                            required
                            ref="startDate"
                            date={state.aStartDate} 
                            mode="datetime" 
                            handleChange={actions.aSetStartDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data przekroczenia granicy">
                        <DatePickerField 
                            required
                            ref="borderCross"
                            date={state.aBorderCross} 
                            mode="datetime" 
                            min={state.aStartDate} 
                            handleChange={actions.aSetBorderCross} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data przekroczenia granicy (powrót)">
                        <DatePickerField 
                            required
                            ref="borderCrossReturn"
                            date={state.aBorderCrossReturn} 
                            mode="datetime" 
                            min={state.aBorderCross} 
                            handleChange={actions.aSetBorderCrossReturn} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data końca delegacji">
                        <DatePickerField 
                            required
                            ref="endDate"
                            date={state.aEndDate} 
                            mode="datetime" 
                            min={state.aBorderCrossReturn} 
                            handleChange={actions.aSetEndDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder placeholder="Data rozliczenia delegacji">
                        <DatePickerField 
                            required
                            ref="settlementDate"
                            date={state.aSettlementDate} 
                            mode="date" 
                            min={state.aEndDate} 
                            max={state.aEndDate} 
                            handleChange={actions.aSetSettlementDate} 
                            placeholder="Wybierz datę"
                        />
                    </FieldHolder>

                    <FieldHolder border placeholder="Kraj">
                        <PickerField
                            required
                            ref="country"
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
                                : <InputField disabled={true} label={state.aCurrency ? '' : "Wybierz kraj"} value={state.aCurrency && `${state.aCurrency} zł`}/> 
                            }
                        </FieldHolder>
                        : null
                    }

                    <FieldHolder small placeholder="Pojazd">
                        <PickerField
                            hiddenField 
                            required
                            ref="venichle"
                            selected={state.aVenichle} 
                            handleChange={actions.aSetVenichle} 
                            handleInputChange={actions.aSetDistance}
                            inputValue={state.aDistance} 
                            items={data.venichles}
                            hiddenFor={[data.venichles[0].value, data.venichles[1].value]}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="email"
                            label='Adres email' 
                            value={state.aEmail}
                            error="Nie może być puste" 
                            onChangeText={ value => actions.aSetEmail(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField
                            ref="name"
                            label='Imię' 
                            value={state.aName} 
                            error="Nie może być puste"
                            onChangeText={ value => actions.aSetName(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField 
                            ref="surname"
                            label='Nazwisko' 
                            value={state.aSurname} 
                            error="Nie może być puste"
                            onChangeText={ value => actions.aSetSurname(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <InputField 
                            ref="position"
                            label='Stanowisko' 
                            value={state.aPosition} 
                            error="Nie może być puste"
                            onChangeText={ value => actions.aSetPosition(value) }
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAlimentationProvided(value.checked)}
                            checked={state.aAlimentationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAccommodationProvided(value.checked)}
                            checked={state.aAccommodationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBoxField
                            required
                            ref="regulation"
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            uncheckedComponentError={<Icon name="checkbox-blank-outline" size={22} color="#ef5350"/>}
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
                        <Button title="Wyślij" onPress={() => this.validate(this.refs)}/>
                    </FieldHolder>
                </ScrollView>

                <AbroadMoreDomestic actions={actions} state={state} visibility={this.state.domesticVisible} handleClose={() => this.closeModal('domesticVisible')}/>
                <AbroadMoreAbroad actions={actions} state={state} visibility={this.state.abroadVisible} handleClose={() => this.closeModal('abroadVisible')}/>
            </Container>
        );
    }
}
