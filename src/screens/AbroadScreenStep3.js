import React, { Component } from 'react';
import { View, ScrollView, TextInput, Alert } from 'react-native';
import CheckBox from 'react-native-modest-checkbox';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from '../helpers/scaling';
import Button from '../components/Button';
import AbroadMoreDomestic from '../modals/AbroadMoreDomestic';
import AbroadMoreAbroad from '../modals/AbroadMoreAbroad';
import { TextField } from 'react-native-material-textfield';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20,
    disabled: true
}

export default class AbroadScreenStep3 extends Component {
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
        const state = this.props.screenProps.state;
        const actions = this.props.screenProps.actions;

        return (
            <Container>
                <ScrollView>
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
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAlimentationProvided(value.checked)}
                            checked={state.aAlimentationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                            onChange={ value => actions.aSetAccommodationProvided(value.checked)}
                            checked={state.aAccommodationProvided}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
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
