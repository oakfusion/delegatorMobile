import React, { Component } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import CheckBox from 'react-native-modest-checkbox';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import IconFeather from 'react-native-vector-icons/Feather'
import { moderateScale } from '../helpers/scaling';
import Button from '../components/Button';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

const RegularTextInput = styled.TextInput`
    color: #fff;
`;

export default class DomesticScreenStep2 extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
            <FieldHolder small>
                <RegularTextInput placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Adres email" />
            </FieldHolder>

            <FieldHolder small>
                <RegularTextInput placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Imię" />
            </FieldHolder>

            <FieldHolder small>
                <RegularTextInput placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Nazwisko" />
            </FieldHolder>

            <FieldHolder small>
                <RegularTextInput placeholderTextColor="#c9c9c9" underlineColorAndroid="#fff" placeholder="Stanowisko" />
            </FieldHolder>

            <FieldHolder small>
                <CheckBox
                    label='Zapewnione całodzienne wyżywienie?'
                    labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                    checkedComponent={<IconFeather name="check-square" size={18} color="#fff"/>}
                    uncheckedComponent={<IconFeather name="square" size={18} color="#c9c9c9"/>}
                />
            </FieldHolder>

            <FieldHolder small>
                <CheckBox
                    label='Zapewniony nocleg?'
                    labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                    checkedComponent={<IconFeather name="check-square" size={18} color="#fff"/>}
                    uncheckedComponent={<IconFeather name="square" size={18} color="#c9c9c9"/>}
                />
            </FieldHolder>

            <FieldHolder small>
                <CheckBox
                    label='Zapoznałem się i akceptuję regulamin*'
                    labelStyle={{color: '#fff', fontSize: moderateScale(14)}}
                    checkedComponent={<IconFeather name="check-square" size={18} color="#fff"/>}
                    uncheckedComponent={<IconFeather name="square" size={18} color="#c9c9c9"/>}
                />
            </FieldHolder>

            <FieldHolder small>
                <Button title="Wyślij"/>
            </FieldHolder>
        </ScrollView>
      </Container>
    );
  }
}
