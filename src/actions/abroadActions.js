import { formatDate } from '../helpers/format';
import { abroadConsts as CONSTS } from '../reducers/consts';
import { Alert } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'

export const aSetStartDate = date => ({type: CONSTS.SET_START_DATE, payload: date});
export const aSetEndDate = date => ({type: CONSTS.SET_END_DATE, payload: date});
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
export const aGetUuid = value =>  ({type: CONSTS.SET_DELEGATION_UUID, payload: value});
export const aSetSettlementMaxDate = date => ({type: CONSTS.SET_SETTLEMENT_MAX_DATE, payload: date});
export const reset = value => ({type: CONSTS.RESET, payload: value});

export function aSetSettlementDate (date) {
    let newDate = new Date(date);
    newDate = newDate.getFullYear() + '-' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '-' + ('0' + newDate.getDate()).slice(-2)+ ' 23:59';
    return {type: CONSTS.SET_SETTLEMENT_DATE, payload: newDate}
}

export function aSetEndAndSettlementMax (date) {
    let maxDate = new Date(new Date(date).setDate(new Date(date).getDate() + 14));
    maxDate = `${maxDate.getFullYear()}-${maxDate.getMonth() + 1}-${maxDate.getDate()} 23:59`;
    return function (dispatch) {
        dispatch(aSetEndDate(date));
        dispatch(aSetSettlementMaxDate(maxDate));
    }
}

export function sendData (data) {
  return async function (dispatch) {
    try {
      let response = await fetch('https://delegator.oakfusion.pl/api/delegation', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data }),
        });
      let responseJson = await response.json();
      dispatch(aGetUuid(responseJson.uuid));
      dispatch(reset(responseJson.uuid));
    } catch (error) {
      console.error(error);
    }
  }
}

export function aUpdateCountry (country, date) {
    return function (dispatch) {
        dispatch(aSetCountry(country));
        dispatch(aFetchingCurrency(true));
        dispatch(aGetCurrency(country, formatDate(date)));
    }
}

export function aGetCurrency (country, date) {
    return function (dispatch) {
        return RNFetchBlob.fetch('GET', `https://delegator.oakfusion.pl/api/currencyExchange?country=${country}&date=${date}`, {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            })
            .then(response => (dispatch(aSetCurrency(response.data)), dispatch(aFetchingCurrency(false))))
            .catch(error => (dispatch(aSetCurrency('')), dispatch(aFetchingCurrency(false))));
    }
}