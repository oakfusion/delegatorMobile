import { formatDateTime } from '../helpers/format';

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

export function getCurrency (date, country) {
    return async (dispatch) => {
        dispatch({
            type: 'GET_CURRENCY_REQUEST'
        });

        try {
            let response = await fetch('https://delegator.oakfusion.pl/api/currencyExchange', {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date: formatDateTime(date), country }),
            });

            let responseJson = await response.json();

            dispatch({
                type: 'GET_CURRENCY_SUCCESS',
                payload: responseJson
            });

        } catch (error) {
            dispatch({
                type: 'GET_CURRENCY_FAILURE',
                payload: error,
                error: true
            })
        }
    }
}