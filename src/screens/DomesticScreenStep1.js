import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePickerField from '../components/DatePickerField';
import PickerField from '../components/PickerField';
import FieldHolder from '../components/FieldHolder';
import styled from 'styled-components';
import data from '../data.json';
import * as domesticActions from '../actions/domesticActions';

const Container = styled.View`
    flex: 1;
    background-color: #6b686d;
`;

class DomesticScreenStep1 extends Component {
  render() {
    const { startDate, endDate, settlementDate, venichle } = this.props.domestic;
    const { setStartDate, setFinishDate, setSettlementDate } = this.props.domesticActions;

    console.log(this);

    return (
        <Container>
            <ScrollView>
                <FieldHolder placeholder="Data rozpoczęcia delegacji">
                    <DatePickerField date={startDate} handleChange={setStartDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data końca delegacji">
                    <DatePickerField date={endDate} handleChange={setFinishDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Data rozliczenia delegacji">
                    <DatePickerField date={settlementDate} handleChange={setSettlementDate} placeholder="Wybierz datę"/>
                </FieldHolder>

                <FieldHolder placeholder="Pojazd">
                    <PickerField hiddenField date={venichle} items={data.venichles}/>
                </FieldHolder>
            </ScrollView>
        </Container>
    );
  } 
}

const stateParse = state => ({ domestic: state.domestic });

const dispatchParse = dispatch => ({ domesticActions: bindActionCreators(domesticActions, dispatch) })

export default connect(stateParse, dispatchParse)(DomesticScreenStep1);