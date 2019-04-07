import {ADD_INSTRUMENT, GET_INSTRUMENT, GET_QUOTE, GET_QUOTES, REMOVE_ITEM} from "../constants/actionTypes";
import iexTrading from "../api/iexTrading";
import {get} from '../api/apiClient'

export const getInstrument = (instrument) => ({
    type: GET_INSTRUMENT,
    payload: get(iexTrading.GET_INSTRUMENT(instrument)),
});

export const addInstrument = () => ({
    type: ADD_INSTRUMENT,
});

export const removeItem = (instrument) => ({
    type: REMOVE_ITEM,
    payload: instrument
});

export const getQuote = (instrument) => ({
    type: GET_QUOTE,
    payload: get(iexTrading.GET_QUOTE(instrument)),
});

export const getQuotes = (instruments) => ({
    type: GET_QUOTES,
    payload: get(iexTrading.GET_QUOTES(), {symbols: instruments, types: 'quote'}),
});
