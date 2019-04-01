import {ADD_INSTRUMENT, GET_INSTRUMENT} from "../constants/actionTypes";
import iexTrading from "../api/iexTrading";
import {get} from '../api/apiClient'

export const getInstrument = (instrument) => ({
    type: GET_INSTRUMENT,
    payload: get(iexTrading.GET_INSTRUMENT(instrument)),
});

export const addInstrument = () => ({
    type: ADD_INSTRUMENT,
});
