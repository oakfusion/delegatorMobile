const initialState = {
  startDate                        : '',
  endDate                          : '',
  domesticAccommodation            : '',
  domesticPublicTransport          : '',
  domesticBreakfastCount           : '',
  domesticDinnerCount              : '',
  domesticSupperCount              : '',
  settlementDate                   : '',
  name                             : '',
  surname                          : '',
  position                         : '',
  country                          : '',
  borderCross                      : '',
  borderCrossReturn                : '',
  abroadAccommodation              : '',
  abroadAccess                     : '',
  abroadPublicTransport            : '',
  abroadBreakfastCount             : '',
  abroadDinnerCount                : '',
  abroadSupperCount                : '',
  venichle                         : '',
  distance                         : '',
  alimentationProvided             : false,
  accommodationProvided            : false,
  regulaminAccepted                : false,
  email                            : '',
  abroadAdditionalDomesticExpenses : '',
  abroadAdditionalAbroadExpenses   : '',
  abroad                           : true
}
  
export default function abroadState(state = initialState, action) {
  switch (action.type) {
    case 'SET_START_DATE':                    return { ...state, startDate: action.payload }
    case 'SET_FINISH_DATE':                   return { ...state, endDate: action.payload }
    case 'SET_SETTLEMENT_DATE':               return { ...state, settlementDate: action.payload }
    case 'SET_ACCOMODATION':                  return { ...state, domesticAccommodation: action.payload }
    case 'SET_PUBLIC_TRANSPORT':              return { ...state, domesticPublicTransport: action.payload }
    case 'SET_BREAKFAST_COUNT':               return { ...state, domesticBreakfastCount: action.payload }
    case 'SET_DINNER_COUNT':                  return { ...state, domesticDinnerCount: action.payload }
    case 'SET_SUPPER_COUNT':                  return { ...state, domesticSupperCount: action.payload }
    case 'SET_NAME':                          return { ...state, name: action.payload }
    case 'SET_SURNAME':                       return { ...state, surname: action.payload }
    case 'SET_POSITION':                      return { ...state, position: action.payload }
    case 'SET_COUNTRY':                       return { ...state, country: action.payload }
    case 'SET_BORDER_CROSS':                  return { ...state, borderCross: action.payload }
    case 'SET_BORDER_CROSS_RETURN':           return { ...state, borderCrossReturn: action.payload }
    case 'SET_ABROAD_ACCOMODATION':           return { ...state, abroadAccommodation: action.payload }
    case 'SET_ABROAD_ACCESS':                 return { ...state, abroadAccess: action.payload }
    case 'SET_ABROAD_PUBLIC_TRANSPORT':       return { ...state, abroadPublicTransport: action.payload }
    case 'SET_ABROAD_BREAKFAST_COUNT':        return { ...state, abroadBreakfastCount: action.payload }
    case 'SET_ABROAD_DINNER_COUNT':           return { ...state, abroadDinnerCount: action.payload }
    case 'SET_ABROAD_SUPPER_COUNT':           return { ...state, abroadSupperCount: action.payload }
    case 'SET_VENICHLE':                      return { ...state, venichle: action.payload }
    case 'SET_DISTANCE':                      return { ...state, distance: action.payload }
    case 'SET_ALIMENTATION_PROVIDED':         return { ...state, alimentationProvided: action.payload }
    case 'SET_ACCOMODATION_PROVIDED':         return { ...state, accommodationProvided: action.payload }
    case 'SET_REGULAMIN_ACCEPT':              return { ...state, regulaminAccepted: action.payload }
    case 'SET_ADDITIONAL_EXPENSES':           return { ...state, abroadAdditionalDomesticExpenses: action.payload }
    case 'SET_ABROAD_ADDITIONAL_EXPEPENCES':  return { ...state, abroadAdditionalAbroadExpenses: action.payload }
    case 'SET_EMAIL':                         return { ...state, email: action.payload }
    
    default: return state;
  }
}