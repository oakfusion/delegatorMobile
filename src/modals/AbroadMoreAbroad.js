import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import MoreModal from './MoreModal';
import FieldHolder from '../components/FieldHolder';
import InputField from '../components/InputField';


export default class AbroadMoreAbroad extends Component {
    render () {
        const state = this.props.state;
        const actions = this.props.actions;
    
        return (
            <MoreModal {...this.props} ref="modal">
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="accomodationCosts"
                        label="Koszty noclegów zagranicznych (w walucie obowiązującej w danym kraju)" 
                        value={state.aAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.aAccommodationAbroad} 
                        disabled={state.aAccommodationProvided} 
                        handleChange={ value => actions.aSetAccommodationAbroad(value)}
                        onSubmitEditing={() => this.refs.accessBoard.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="accessBoard"
                        label="Koszty dojazdów zagranicznych (w walucie obowiązującej w danym kraju)" 
                        value={state.aAccessAbroad} 
                        handleChange={ value => actions.aSetAccessAbroad(value) }
                        onSubmitEditing={() => this.refs.publicCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="publicCosts"
                        label="Koszty zagranicznej komunikacji miejskiej (w walucie obowiązującej w danym kraju)"
                        value={state.aPublicTransportAbroad} 
                        handleChange={ value => actions.aSetPublicTransportAbroad(value) }
                        onSubmitEditing={() => this.refs.breakfastCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="breakfastCount"
                        label="Liczba śniadań za granicą" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aBreakfastCountAbroad} 
                        handleChange={ value => actions.aSetBreakfastCountAbroad(value) }
                        onSubmitEditing={() => this.refs.dinnerCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="dinnerCount"
                        label="Liczba obiadów za granicą" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aDinnerCountAbroad} 
                        handleChange={ value => actions.aSetDinnerCountAbroad(value) }
                        onSubmitEditing={() => this.refs.supperCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="supperCount"
                        label="Liczba kolacji za granicą" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aSupperCountAbroad} 
                        handleChange={ value => actions.aSetSupperCountAbroad(value) }
                        onSubmitEditing={() => this.refs.accomodationCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="accomodationCosts"
                        label="Dodatkowe koszta części zagranicznej"
                        value={state.aAdditionalExpensesAbroad} 
                        handleChange={ value => actions.aSetAdditionalExpensesAbroad(value) }
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                        returnKeyType="done"
                    />
                </FieldHolder>
            </MoreModal>
        );
    }
};