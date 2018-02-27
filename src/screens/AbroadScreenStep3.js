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

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const RegularTextInput = styled.TextInput`
    color: #fff;
`;

const defaultInputProps = {
    placeholderTextColor: "#c9c9c9",
    underlineColorAndroid: "#fff"
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
        return (
            <Container>
                <ScrollView>
                    <FieldHolder small>
                        <RegularTextInput {...defaultInputProps} placeholder="Adres email" />
                    </FieldHolder>

                    <FieldHolder small>
                        <RegularTextInput {...defaultInputProps} placeholder="Imię" />
                    </FieldHolder>

                    <FieldHolder small>
                        <RegularTextInput {...defaultInputProps} placeholder="Nazwisko" />
                    </FieldHolder>

                    <FieldHolder small>
                        <RegularTextInput {...defaultInputProps} placeholder="Stanowisko" />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
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

                <AbroadMoreDomestic visibility={this.state.domesticVisible} handleClose={() => this.closeModal('domesticVisible')}/>
                <AbroadMoreAbroad visibility={this.state.abroadVisible} handleClose={() => this.closeModal('abroadVisible')}/>
            </Container>
        );
    }
}
