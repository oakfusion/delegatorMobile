import { domesticConsts as CONSTS } from '../reducers/consts';
import { formatDateTime, formatDate } from '../helpers/format';
 
export const dSetStartDate = date => ({type: CONSTS.SET_START_DATE, payload: date});
export const dSetEndDate = date => ({type: CONSTS.SET_END_DATE, payload: date});
export const dSetAccomodation = value => ({type: CONSTS.SET_ACCOMODATION, payload: value});
export const dSetPublicTransport = value => ({type: CONSTS.SET_PUBLIC_TRANSPORT, payload: value});
export const dSetBreakfastCount = value => ({type: CONSTS.SET_BREAKFAST_COUNT, payload: value});
export const dSetDinnerCount = value => ({type: CONSTS.SET_DINNER_COUNT, payload: value});
export const dSetSupperCount = value => ({type: CONSTS.SET_SUPPER_COUNT, payload: value});
export const dSetName = value => ({type: CONSTS.SET_NAME, payload: value});
export const dSetSurname = value => ({type: CONSTS.SET_SURNAME, payload: value});
export const dSetPosition = value => ({type: CONSTS.SET_POSITION, payload: value});
export const dSetCity = value => ({type: CONSTS.SET_CITY, payload: value});
export const dSetVenichle = value => ({type: CONSTS.SET_VENICHLE, payload: value});
export const dSetDistance = value => ({type: CONSTS.SET_DISTANCE, payload: value});
export const dSetAlimentationProvided = (value, text) => ({type: CONSTS.SET_ALIMENTATION_PROVIDED, payload: value });
export const dSetAccomodationProvided = (value, text) => ({type: CONSTS.SET_ACCOMODATION_PROVIDED, payload: value });
export const dSetRegulaminAccept = value => ({type: CONSTS.SET_REGULAMIN_ACCEPT, payload: value});
export const dSetAdditionalExpenses = value => ({type: CONSTS.SET_ADDITIONAL_EXPENSES, payload: value});
export const dSetEmail = value => ({type: CONSTS.SET_EMAIL, payload: value});
export const dGetUuid = value =>  ({type: CONSTS.SET_DELEGATION_UUID, payload: value});
export const dSetSettlementMaxDate = date => ({type: CONSTS.SET_SETTLEMENT_MAX_DATE, payload: date});
export const reset = value => ({type: CONSTS.RESET, payload: value});

export function dSetSettlementDate (date) {
  let newDate = new Date(date);
  newDate = newDate.getFullYear() + '-' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '-' + ('0' + newDate.getDate()).slice(-2)+ ' 23:59';
  return {type: CONSTS.SET_SETTLEMENT_DATE, payload: newDate}
}

export function dSetEndAndSettlementMax (date) {
  let maxDate = new Date(new Date(date).setDate(new Date(date).getDate() + 14));
  maxDate = `${maxDate.getFullYear()}-${maxDate.getMonth() + 1}-${maxDate.getDate()} 23:59`;
  return function (dispatch) {
    dispatch(dSetEndDate(date));
    dispatch(dSetSettlementMaxDate(maxDate));
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
      dispatch(dGetUuid(responseJson.uuid));
      dispatch(reset(responseJson.uuid));
    } catch (error) {
      console.error(error);
    }
  }
}