const initialState = {
    start                            : '',
    end                              : '',
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
    carType                          : '',
    kilometers                       : '',
    alimentationProvided             : '',
    accommodationProvided            : '',
    email                            : '',
    abroadAdditionalDomesticExpenses : '',
    abroadAdditionalAbroadExpenses   : '',
    abroad                           : true
  }
  
  export default function abroadState(state = initialState) {
    return state
  }