import {connect} from 'react-redux';
import {addInstrument, getInstrument, getQuote} from "../actions/portfolio";
import InstrumentSearch from "../components/InstrumentSearch";
import get from 'lodash/get'

const mapStateToProps = (state) => {
    return {
        instrument: get(state, 'portfolio.foundedInstrument', {}),
        portfolio: get(state, 'portfolio.portfolio', []),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInstrument: (instrument) => {
        dispatch(getInstrument(instrument));
    },
    addInstrument: (instrument) => {
        dispatch(getQuote(instrument))
            .then((instrument) => dispatch(addInstrument(instrument)));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSearch);
