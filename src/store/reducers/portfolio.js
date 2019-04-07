import {
    ADD_INSTRUMENT,
    FAILURE,
    GET_INSTRUMENT,
    GET_QUOTE,
    GET_QUOTES,
    REMOVE_ITEM,
    STARTED,
    SUCCESS
} from "../../constants/actionTypes";

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    foundedInstrument: {},
    portfolio: []
};

const updateQuotes = (oldItems, newItems) => oldItems.map(item => {
    const newOpen = newItems[item.symbol].quote.open;
    const newClose = newItems[item.symbol].quote.close;
    return {
        ...item,
        open: newOpen,
        close: newClose,
    }
});


const portfolio = (state = INITIAL_STATE, action) => {
    switch (action.type) {
//-----------------------------FIND INSTRUMENT---------------------------------------------
        case `${GET_INSTRUMENT}_${STARTED}`:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case `${GET_INSTRUMENT}_${SUCCESS}`:
            return {
                ...state,
                isLoading: false,
                foundedInstrument: action.payload.body,
                error: null,
            };
        case `${GET_INSTRUMENT}_${FAILURE}`:
            return {
                ...state,
                isLoading: false,
                foundedInstrument: {},
                error: action.payload.response,
            };

//-----------------------------GET QUOTE BY INSTRUMENT--------------------------------------
        case `${GET_QUOTE}_${STARTED}`:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case `${GET_QUOTE}_${SUCCESS}`:
            return {
                ...state,
                isLoading: false,
                foundedInstrument: action.payload.body,
                error: null,
            };
        case `${GET_QUOTE}_${FAILURE}`:
            return {
                ...state,
                isLoading: false,
                foundedInstrument: {},
                error: action.payload.response,
            };

//-----------------------------GET BATCH QUOTES---------------------------------------------
        case `${GET_QUOTES}_${STARTED}`:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case `${GET_QUOTES}_${SUCCESS}`:
            return {
                ...state,
                portfolio: updateQuotes(state.portfolio, action.payload.body),
                isLoading: false,
                error: null,
            };
        case `${GET_QUOTES}_${FAILURE}`:
            return {
                ...state,
                isLoading: false,
                foundedInstrument: {},
                error: action.payload.response,
            };
//-----------------------------INSTRUMENT---------------------------------------------
        case ADD_INSTRUMENT :
            return {
                ...state,
                portfolio: [
                    ...state.portfolio,
                    state.foundedInstrument
                ]
            };

        case REMOVE_ITEM :
            return {
                ...state,
                portfolio: state.portfolio
                    .filter(item => item.symbol !== action.payload)
            };
        default:
            return state;
    }
};

export default portfolio;
