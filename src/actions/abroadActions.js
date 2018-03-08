import { formatDate } from '../helpers/format';
import { abroadConsts as CONSTS } from '../reducers/consts';
import { Alert } from 'react-native';

export const aSetStartDate = date => ({type: CONSTS.SET_START_DATE, payload: date});
export const aSetEndDate = date => ({type: CONSTS.SET_END_DATE, payload: date});
export const aSetSettlementDate = date => ({type: CONSTS.SET_SETTLEMENT_DATE, payload: date});
export const aSetAccommodationDomestic = value => ({type: CONSTS.SET_ACCOMODATION, payload: value});
export const aSetPublicTransportDomestic = value => ({type: CONSTS.SET_PUBLIC_TRANSPORT, payload: value});
export const aSetBreakfastCountDomestic = value => ({type: CONSTS.SET_BREAKFAST_COUNT, payload: value});
export const aSetDinnerCountDomestic = value => ({type: CONSTS.SET_DINNER_COUNT, payload: value});
export const aSetSupperCountDomestic = value => ({type: CONSTS.SET_SUPPER_COUNT, payload: value});
export const aSetName = value => ({type: CONSTS.SET_NAME, payload: value});
export const aSetSurname = value => ({type: CONSTS.SET_SURNAME, payload: value});
export const aSetPosition = value => ({type: CONSTS.SET_POSITION, payload: value});
export const aSetCountry = value => ({type: CONSTS.SET_COUNTRY, payload: value});
export const aSetBorderCross = value => ({type: CONSTS.SET_BORDER_CROSS, payload: value});
export const aSetBorderCrossReturn = value => ({type: CONSTS.SET_BORDER_CROSS_RETURN, payload: value});
export const aSetAccommodationAbroad = value => ({type: CONSTS.SET_ABROAD_ACCOMODATION, payload: value});
export const aSetAccessAbroad = value => ({type: CONSTS.SET_ABROAD_ACCESS, payload: value});
export const aSetPublicTransportAbroad = value => ({type: CONSTS.SET_ABROAD_PUBLIC_TRANSPORT, payload: value});
export const aSetBreakfastCountAbroad = value => ({type: CONSTS.SET_ABROAD_BREAKFAST_COUNT, payload: value});
export const aSetDinnerCountAbroad = value => ({type: CONSTS.SET_ABROAD_DINNER_COUNT, payload: value});
export const aSetSupperCountAbroad = value => ({type: CONSTS.SET_ABROAD_SUPPER_COUNT, payload: value});
export const aSetVenichle = value => ({type: CONSTS.SET_VENICHLE, payload: value});
export const aSetDistance = value => ({type: CONSTS.SET_DISTANCE, payload: value});
export const aSetAlimentationProvided = value => ({type: CONSTS.SET_ALIMENTATION_PROVIDED, payload: value});
export const aSetAccommodationProvided = value => ({type: CONSTS.SET_ACCOMODATION_PROVIDED, payload: value});
export const aSetRegulaminAccepted = value => ({type: CONSTS.SET_REGULAMIN_ACCEPT, payload: value});
export const aSetAdditionalExpensesDomestic = value => ({type: CONSTS.SET_ADDITIONAL_EXPENSES, payload: value});
export const aSetAdditionalExpensesAbroad = value => ({type: CONSTS.SET_ABROAD_ADDITIONAL_EXPENSES, payload: value});
export const aSetEmail = value => ({type: CONSTS.SET_EMAIL, payload: value});
export const aSetCurrency = value => ({ type: CONSTS.SET_CURRENCY,  payload: value });
export const aFetchingCurrency = value => ({ type: CONSTS.FETCHING_CURRENCY, payload: value });

export function aUpdateCountry (country, date) {
    return function (dispatch) {
        dispatch(aSetCountry(country));
        dispatch(aFetchingCurrency(true));
        dispatch(aGetCurrency(country, formatDate(date)));
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

export function aGetCurrency (country, date) {
    return function (dispatch) {
        return fetchCurrency(country, date)
            .then(handleErrors)
            .then(response => (dispatch(aSetCurrency(response._bodyText)), dispatch(aFetchingCurrency(false))))
            .catch(error => (dispatch(aSetCurrency('')), dispatch(aFetchingCurrency(false))));
    }
}