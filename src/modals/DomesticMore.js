import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import MoreModal from './MoreModal';
import FieldHolder from '../components/FieldHolder';
import InputField from '../components/InputField';


export default class DomesticMore extends Component {
    render () {
        const state = this.props.state;
        const actions = this.props.actions;
        
        return (
            <MoreModal {...this.props} ref="modal">
                <FieldHolder small>
                    <InputField 
                        keyboardType="numeric"
                        ref="accomodationCosts"
                        label="Koszty noclegów" 
                        value={state.dAccommodationProvided ? 'Zapewnione przez pracodawcę' : state.dAccommodation} 
                        disabled={state.dAccommodationProvided} 
                        handleChange={ value => actions.dSetAccomodation(value) }
                        onSubmitEditing={() => this.refs.publicCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>

                <FieldHolder small>
                    <InputField 
                        keyboardType="numeric"
                        ref="publicCosts"
                        label="Koszty komunikacji miejskiej" 
                        value={state.dPublicTransport} 
                        handleChange={ value => actions.dSetPublicTransport(value) }
                        onSubmitEditing={() => this.refs.breakfastCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>

                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="breakfastCount"
                        label="Liczba śniadań (zapewnionych przez pracodawcę)"
                        disabled={state.dAlimentationProvided} 
                        value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dBreakfastCount} 
                        handleChange={ value => actions.dSetBreakfastCount(value) }
                        onSubmitEditing={() => this.refs.dinnerCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>

                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="dinnerCount"
                        label="Liczba obiadów (zapewnionych przez pracodawcę)" 
                        disabled={state.dAlimentationProvided} 
                        value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dDinnerCount} 
                        handleChange={ value => actions.dSetDinnerCount(value) }
                        onSubmitEditing={() => this.refs.supperCount.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>

                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="supperCount"
                        label="Liczba kolacji (zapewnionych przez pracodawcę)" 
                        disabled={state.dAlimentationProvided} 
                        value={state.dAlimentationProvided ? 'Zapewnione przez pracodawcę' : state.dSupperCount} 
                        handleChange={ value => actions.dSetSupperCount(value) }
                        onSubmitEditing={() => this.refs.additionalCosts.focus()}
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                    />
                </FieldHolder>

                <FieldHolder small>
                    <InputField
                        keyboardType="numeric"
                        ref="additionalCosts"
                        label="Dodatkowe koszta" 
                        value={state.dAdditionalExpenses} 
                        handleChange={ value => actions.dSetAdditionalExpenses(value) }
                        onFocus={event => this.refs.modal.scrollToInput(event.target)}
                        returnKeyType="done"
                    />
                </FieldHolder>
            </MoreModal>
        )
    }
};