import {ADD_INSTRUMENT, FAILURE, GET_INSTRUMENT, STARTED, SUCCESS} from "../../constants/actionTypes";

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    foundedInstrument: null,
    portfolio: []
};

const portfolio = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${GET_INSTRUMENT}_${STARTED}`:
            return {...state, isLoading: true, error: null};
        case `${GET_INSTRUMENT}_${SUCCESS}`:
            return {
                ...state, isLoading: false, foundedInstrument: action.payload.body, error: null,
            };
        case `${GET_INSTRUMENT}_${FAILURE}`:
            return {
                ...state, isLoading: false, foundedInstrument: null, error: action.payload.response,
            };
        case ADD_INSTRUMENT :
            return {
                ...state,
                portfolio: [...state.portfolio, state.foundedInstrument.quote]
            };
        default:
            return state;
    }
};

export default portfolio;
