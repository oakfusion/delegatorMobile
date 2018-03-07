import { formatDate } from '../helpers/format';
import { Alert } from 'react-native';

export const setStartDate = date => ({type: 'SET_START_DATE', payload: date});
export const setFinishDate = date => ({type: 'SET_FINISH_DATE', payload: date});
export const setSettlementDate = date => ({type: 'SET_SETTLEMENT_DATE', payload: date});
export const setAccomodation = value => ({type: 'SET_ACCOMODATION', payload: value});
export const setPublicTransport = value => ({type: 'SET_PUBLIC_TRANSPORT', payload: value});
export const setBreakfastCount = value => ({type: 'SET_BREAKFAST_COUNT', payload: value});
export const setDinnerCount = value => ({type: 'SET_DINNER_COUNT', payload: value});
export const setSupperCount = value => ({type: 'SET_SUPPER_COUNT', payload: value});
export const setName = value => ({type: 'SET_NAME', payload: value});
export const setSurname = value => ({type: 'SET_SURNAME', payload: value});
export const setPosition = value => ({type: 'SET_POSITION', payload: value});
export const setCountry = value => ({type: 'SET_COUNTRY', payload: value});
export const setBorderCross = value => ({type: 'SET_BORDER_CROSS', payload: value});
export const setBorderCrossReturn = value => ({type: 'SET_BORDER_CROSS_RETURN', payload: value});
export const setAbroadAccomodation = value => ({type: 'SET_ABROAD_ACCOMODATION', payload: value});
export const setAbroadAccess = value => ({type: 'SET_ABROAD_ACCESS', payload: value});
export const setAbroadPublicTransport = value => ({type: 'SET_ABROAD_PUBLIC_TRANSPORT', payload: value});
export const setAbroadBreakfastCount = value => ({type: 'SET_ABROAD_BREAKFAST_COUNT', payload: value});
export const setAbroadDinnerCount = value => ({type: 'SET_ABROAD_DINNER_COUNT', payload: value});
export const setAbroadSupperCount = value => ({type: 'SET_ABROAD_SUPPER_COUNT', payload: value});
export const setVenichle = value => ({type: 'SET_VENICHLE', payload: value});
export const setDistance = value => ({type: 'SET_DISTANCE', payload: value});
export const setAlimentationProvided = value => ({type: 'SET_ALIMENTATION_PROVIDED', payload: value});
export const setAccomodationProvided = value => ({type: 'SET_ACCOMODATION_PROVIDED', payload: value});
export const setRegulaminAccept = value => ({type: 'SET_REGULAMIN_ACCEPT', payload: value});
export const setAdditionalExpenses = value => ({type: 'SET_ADDITIONAL_EXPENSES', payload: value});
export const setAbroadAdditionalExpenses = value => ({type: 'SET_ABROAD_ADDITIONAL_EXPEPENCES', payload: value});
export const setEmail = value => ({type: 'SET_EMAIL', payload: value});
export const setCurrency = value => ({ type: 'SET_CURRENCY',  payload: value });
export const fetchingCurrency = value => ({ type: 'FETCHING_CURRENCY', payload: value });

export function updateCountry (country, date) {
    return function (dispatch) {
        dispatch(setCountry(country));
        dispatch(fetchingCurrency(true));
        dispatch(getCurrency(country, formatDate(date)));
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchCurrency (country, date) {
    return fetch(`https://delegator.oakfusion.pl/api/currencyExchange?country=${country}&date=${date}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    });
}

export function getCurrency (country, date) {
    return function (dispatch) {
        return fetchCurrency(country, date)
            .then(handleErrors)
            .then(response => (dispatch(setCurrency(response._bodyText)), dispatch(fetchingCurrency(false))))
            .catch(error => (dispatch(setCurrency('')), dispatch(fetchingCurrency(false))));
    }
}