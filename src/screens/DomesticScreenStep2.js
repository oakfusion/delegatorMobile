import React, { Component } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import CheckBox from 'react-native-modest-checkbox';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from '../helpers/scaling';
import Button from '../components/Button';
import DomesticMore from '../modals/DomesticMore';
import { TextField } from 'react-native-material-textfield';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const RegularTextInput = styled.TextInput`
    color: #fff;
`;

const defaultInputProps = {
    baseColor: "#c9c9c9",
    textColor: "#fff",
    tintColor: "#ffab40",
    labelHeight: 20
}

export default class DomesticScreenStep2 extends Component {
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

    render() {
        return (
            <Container>
                <ScrollView>
                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Adres email' />
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Imię' />
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Nazwisko' />
                    </FieldHolder>

                    <FieldHolder small>
                        <TextField {...defaultInputProps} label='Stanowisko' />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewnione całodzienne wyżywienie?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapewniony nocleg?'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <CheckBox
                            label='Zapoznałem się i akceptuję regulamin*'
                            labelStyle={{color: '#fff'}}
                            checkedComponent={<Icon name="checkbox-marked" size={22} color="#ffab40"/>}
                            uncheckedComponent={<Icon name="checkbox-blank-outline" size={22} color="#c9c9c9"/>}
                        />
                    </FieldHolder>

                    <FieldHolder small>
                        <Button dark title="Dodatkowe opcje" onPress={() => this.openModal()}/>
                    </FieldHolder>

                    <FieldHolder small last>
                        <Button title="Wyślij"/>
                    </FieldHolder>
                </ScrollView>

                <DomesticMore visibility={this.state.modalVisible} handleClose={() => this.closeModal()}/>
            </Container>
        );
    }
}
