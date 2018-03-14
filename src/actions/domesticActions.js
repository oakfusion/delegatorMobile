import { domesticConsts as CONSTS } from '../reducers/consts';

export const dSetStartDate = date => ({type: CONSTS.SET_START_DATE, payload: date});
export const dSetEndDate = date => ({type: CONSTS.SET_END_DATE, payload: date});
export const dSetSettlementDate = date => ({type: CONSTS.SET_SETTLEMENT_DATE, payload: date});
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
export const dSetAlimentationProvided = (value, text) => ({type: CONSTS.SET_ALIMENTATION_PROVIDED, payload: value, text});
export const dSetAccomodationProvided = (value, text) => ({type: CONSTS.SET_ACCOMODATION_PROVIDED, payload: value, text});
export const dSetRegulaminAccept = value => ({type: CONSTS.SET_REGULAMIN_ACCEPT, payload: value});
export const dSetAdditionalExpenses = value => ({type: CONSTS.SET_ADDITIONAL_EXPENSES, payload: value});
export const dSetEmail = value => ({type: CONSTS.SET_EMAIL, payload: value});

export async function sendData (data) {
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
        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }
}