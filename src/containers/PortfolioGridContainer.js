import {connect} from 'react-redux';
import PortfolioGrid from "../components/PortfolioGrid";
import {getInstrument, getQuote, getQuotes, removeItem} from "../actions/portfolio";
import get from 'lodash/get'


const mapStateToProps = (state) => {
    return {
        portfolio: get(state, 'portfolio.portfolio')
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInstrument: (instrument) => {
        dispatch(getInstrument(instrument));
    },
    getQuotes: (symbols) => {
        setTimeout(() => dispatch(getQuotes(symbols)), 20000);
    },
    removeItem: (instrument) => {
        dispatch(removeItem(instrument))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGrid);
