

const initialState = {
    startDate                   : '',
    endDate                     : '',
    settlementDate              : '',
    domesticAccommodation       : '',
    domesticPublicTransport     : '',
    domesticBreakfastCount      : '',
    domesticDinnerCount         : '',
    domesticSupperCount         : '',
    name                        : '',
    surname                     : '',
    position                    : '',
    city                        : '',
    venichle                    : '',
    distance                    : '',
    alimentationProvided        : false,
    accommodationProvided       : false,
    regulaminAccepted           : false,
    domesticAdditionalExpenses  : '',
    email                       : '',
    abroad                      : false
  }
  
  export default function domesticState(state = initialState, action) {
    switch (action.type) {
        case 'SET_START_DATE':              return { ...state, startDate: action.payload }
        case 'SET_FINISH_DATE':             return { ...state, endDate: action.payload }
        case 'SET_SETTLEMENT_DATE':         return { ...state, settlementDate: action.payload }
        case 'SET_ACCOMODATION':            return { ...state, domesticAccommodation: action.payload }
        case 'SET_PUBLIC_TRANSPORT':        return { ...state, domesticPublicTransport: action.payload }
        case 'SET_BREAKFAST_COUNT':         return { ...state, domesticBreakfastCount: action.payload }
        case 'SET_DINNER_COUNT':            return { ...state, domesticDinnerCount: action.payload }
        case 'SET_SUPPER_COUNT':            return { ...state, domesticSupperCount: action.payload }
        case 'SET_NAME':                    return { ...state, name: action.payload }
        case 'SET_SURNAME':                 return { ...state, surname: action.payload }
        case 'SET_POSITION':                return { ...state, position: action.payload }
        case 'SET_CITY':                    return { ...state, city: action.payload }
        case 'SET_VENICHLE':                return { ...state, venichle: action.payload }
        case 'SET_DISTANCE':                return { ...state, distance: action.payload }
        case 'SET_REGULAMIN_ACCEPT':        return { ...state, regulaminAccepted: action.payload }
        case 'SET_ADDITIONAL_EXPENSES':     return { ...state, domesticAdditionalExpenses: action.payload }
        case 'SET_EMAIL':                   return { ...state, email: action.payload }
        case 'SET_ALIMENTATION_PROVIDED':   return { ...state, alimentationProvided: action.payload }
        case 'SET_ACCOMODATION_PROVIDED':   return { ...state, accommodationProvided: action.payload }
        
        default: return state;
    }
  }