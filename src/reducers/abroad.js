import { abroadConsts as CONSTS } from './consts';

const initialState = {
  aStartDate                        : '',
  aEndDate                          : '',
  aAccommodationDomestic            : '',
  aPublicTransportDomestic          : '',
  aBreakfastCountDomestic           : '',
  aDinnerCountDomestic              : '',
  aSupperCountDomestic              : '',
  aSettlementDate                   : '',
  aSettlementMaxDate                : '',
  aName                             : '',
  aSurname                          : '',
  aPosition                         : '',
  aCountry                          : '',
  aFetchingCurrency                 : false,
  aCurrency                         : '',
  aBorderCross                      : '',
  aBorderCrossReturn                : '',
  aAccommodationAbroad              : '',
  aAccessAbroad                     : '',
  aPublicTransportAbroad            : '',
  aBreakfastCountAbroad             : '',
  aDinnerCountAbroad                : '',
  aSupperCountAbroad                : '',
  aVenichle                         : '',
  aDistance                         : '',
  aAlimentationProvided             : false,
  aAccommodationProvided            : false,
  aRegulaminAccepted                : false,
  aEmail                            : '',
  aAdditionalExpensesDomestic       : '',
  aAdditionalExpensesAbroad         : '',
  aUuid                             : '',
  abroad                            : true
}
  
export default function abroadState(state = initialState, action) {
  switch (action.type) {
    case CONSTS.SET_START_DATE:                    return { ...state, aStartDate: action.payload }
    case CONSTS.SET_END_DATE:                      return { ...state, aEndDate: action.payload }
    case CONSTS.SET_SETTLEMENT_DATE:               return { ...state, aSettlementDate: action.payload }
    case CONSTS.SET_ACCOMODATION:                  return { ...state, aAccommodationDomestic: action.payload }
    case CONSTS.SET_PUBLIC_TRANSPORT:              return { ...state, aPublicTransportDomestic: action.payload }
    case CONSTS.SET_BREAKFAST_COUNR:               return { ...state, aBreakfastCountDomestic: action.payload }
    case CONSTS.SET_DINNER_COUNT:                  return { ...state, aDinnerCountDomestic: action.payload }
    case CONSTS.SET_SUPPER_COUNT:                  return { ...state, aSupperCountDomestic: action.payload }
    case CONSTS.SET_NAME:                          return { ...state, aName: action.payload }
    case CONSTS.SET_SURNAME:                       return { ...state, aSurname: action.payload }
    case CONSTS.SET_POSITION:                      return { ...state, aPosition: action.payload }
    case CONSTS.SET_COUNTRY:                       return { ...state, aCountry: action.payload }
    case CONSTS.SET_BORDER_CROSS:                  return { ...state, aBorderCross: action.payload }
    case CONSTS.SET_BORDER_CROSS_RETURN:           return { ...state, aBorderCrossReturn: action.payload }
    case CONSTS.SET_ABROAD_ACCOMODATION:           return { ...state, aAccommodationAbroad: action.payload }
    case CONSTS.SET_ABROAD_ACCESS:                 return { ...state, aAccessAbroad: action.payload }
    case CONSTS.SET_ABROAD_PUBLIC_TRANSPORT:       return { ...state, aPublicTransportAbroad: action.payload }
    case CONSTS.SET_ABROAD_BREAKFAST_COUNT:        return { ...state, aBreakfastCountAbroad: action.payload }
    case CONSTS.SET_ABROAD_DINNER_COUNT:           return { ...state, aDinnerCountAbroad: action.payload }
    case CONSTS.SET_ABROAD_SUPPER_COUNT:           return { ...state, aSupperCountAbroad: action.payload }
    case CONSTS.SET_VENICHLE:                      return { ...state, aVenichle: action.payload }
    case CONSTS.SET_DISTANCE:                      return { ...state, aDistance: action.payload }
    case CONSTS.SET_ALIMENTATION_PROVIDED:         return { ...state, aAlimentationProvided: action.payload }
    case CONSTS.SET_ACCOMODATION_PROVIDED:         return { ...state, aAccommodationProvided: action.payload }
    case CONSTS.SET_REGULAMIN_ACCEPT:              return { ...state, aRegulaminAccepted: action.payload }
    case CONSTS.SET_ADDITIONAL_EXPENSES:           return { ...state, aAdditionalExpensesDomestic: action.payload }
    case CONSTS.SET_ABROAD_ADDITIONAL_EXPENSES:    return { ...state, aAdditionalExpensesAbroad: action.payload }
    case CONSTS.SET_EMAIL:                         return { ...state, aEmail: action.payload }
    case CONSTS.SET_CURRENCY:                      return { ...state, aCurrency: action.payload }
    case CONSTS.FETCHING_CURRENCY:                 return { ...state, aFetchingCurrency: action.payload }
    case CONSTS.SET_DELEGATION_UUID:               return { ...state, aUuid: action.payload }
    case CONSTS.SET_SETTLEMENT_MAX_DATE:           return { ...state, aSettlementMaxDate: action.payload }
    case CONSTS.RESET:                             return { ...initialState, aUuid: action.payload }
    
    default: return state;
  }
}