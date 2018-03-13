import { domesticConsts as CONSTS } from './consts';

const initialState = {
  dStartDate                    : '',
  dEndDate                      : '',
  dSettlementDate               : '',
  dAccommodation                : '',
  dPublicTransport              : '',
  dBreakfastCount               : '',
  dDinnerCount                  : '',
  dSupperCount                  : '',
  dName                         : '',
  dSurname                      : '',
  dPosition                     : '',
  dCity                         : '',
  dVenichle                     : '',
  dDistance                     : '',
  dAlimentationProvided         : false,
  dAccommodationProvided        : false,
  dRegulaminAccepted            : false,
  dAdditionalExpenses           : '',
  dEmail                        : '',
  abroad                        : false
}
  
export default function domesticState(state = initialState, action) {
  switch (action.type) {
    case CONSTS.SET_START_DATE:              return { ...state, dStartDate: action.payload }
    case CONSTS.SET_END_DATE:                return { ...state, dEndDate: action.payload }
    case CONSTS.SET_SETTLEMENT_DATE:         return { ...state, dSettlementDate: action.payload }
    case CONSTS.SET_ACCOMODATION:            return { ...state, dAccommodation: action.payload }
    case CONSTS.SET_PUBLIC_TRANSPORT:        return { ...state, dPublicTransport: action.payload }
    case CONSTS.SET_BREAKFAST_COUNT:         return { ...state, dBreakfastCount: action.payload }
    case CONSTS.SET_DINNER_COUNT:            return { ...state, dDinnerCount: action.payload }
    case CONSTS.SET_SUPPER_COUNT:            return { ...state, dSupperCount: action.payload }
    case CONSTS.SET_NAME:                    return { ...state, dName: action.payload }
    case CONSTS.SET_SURNAME:                 return { ...state, dSurname: action.payload }
    case CONSTS.SET_POSITION:                return { ...state, dPosition: action.payload }
    case CONSTS.SET_CITY:                    return { ...state, dCity: action.payload }
    case CONSTS.SET_VENICHLE:                return { ...state, dVenichle: action.payload }
    case CONSTS.SET_DISTANCE:                return { ...state, dDistance: action.payload }
    case CONSTS.SET_REGULAMIN_ACCEPT:        return { ...state, dRegulaminAccepted: action.payload }
    case CONSTS.SET_ADDITIONAL_EXPENSES:     return { ...state, dAdditionalExpenses: action.payload }
    case CONSTS.SET_EMAIL:                   return { ...state, dEmail: action.payload }
    case CONSTS.SET_ALIMENTATION_PROVIDED:   return { ...state, dAlimentationProvided: action.payload }
    case CONSTS.SET_ACCOMODATION_PROVIDED:   return { ...state, dAccommodationProvided: action.payload }
    
    default: return state;
  }
}