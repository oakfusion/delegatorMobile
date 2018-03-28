import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components';
import MoreModal from './MoreModal';
import FieldHolder from '../components/FieldHolder';
import InputField from '../components/InputField';


export default class AbroadMoreDomestic extends Component {
    render () {
        const state = this.props.state;
        const actions = this.props.actions;
        
        return (
            <MoreModal {...this.props} ref="modal">
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="accomodationCosts"
                        label="Koszty noclegów w kraju (w zł)" 
                        value={state.aAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.aAccommodationDomestic} 
                        disabled={state.aAccommodationProvided} 
                        handleChange={ value => actions.aSetAccommodationDomestic(value)}
                        onSubmitEditing={() => this.refs.publicCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="publicCosts"
                        label="Koszty komunikacji miejskiej w kraju (w zł)" 
                        value={state.aPublicTransportDomestic} 
                        handleChange={ value => actions.aSetPublicTransportDomestic(value) }
                        onSubmitEditing={() => this.refs.breakfastCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="breakfastCount"
                        label="Liczba śniadań w kraju" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aBreakfastCountDomestic} 
                        handleChange={ value => actions.aSetBreakfastCountDomestic(value) }
                        onSubmitEditing={() => this.refs.dinnerCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="dinnerCount"
                        label="Liczba obiadów w kraju" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aDinnerCountDomestic} 
                        handleChange={ value => actions.aSetDinnerCountDomestic(value) }
                        onSubmitEditing={() => this.refs.supperCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="supperCount"
                        label="Liczba kolacji w kraju" 
                        disabled={state.aAlimentationProvided} 
                        value={state.aAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.aSupperCountDomestic} 
                        handleChange={ value => actions.aSetSupperCountDomestic(value) }
                        onSubmitEditing={() => this.refs.additionalCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>
    
                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="additionalCosts"
                        label="Dodatkowe koszta części krajowej" 
                        value={state.aAdditionalExpensesDomestic} 
                        handleChange={ value => actions.aSetAdditionalExpensesDomestic(value) }
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                        returnKeyType="done"
                    />
                </FieldHolder>
            </MoreModal>
        )
    }
}