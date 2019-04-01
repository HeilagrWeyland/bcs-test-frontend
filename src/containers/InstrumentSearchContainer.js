import {connect} from 'react-redux';
import {addInstrument, getInstrument} from "../actions/portfolio";
import InstrumentSearch from "../components/InstrumentSearch";
import get from 'lodash/get'

const mapStateToProps = (state) => {
    return {
        instrument: get(state, 'portfolio.foundedInstrument.quote', 'Not found'),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInstrument: (instrument) => {
        dispatch(getInstrument(instrument));
    },
    addInstrument: () => {
        dispatch(addInstrument());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSearch);
