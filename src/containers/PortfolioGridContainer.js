import {connect} from 'react-redux';
import PortfolioGrid from "../components/PortfolioGrid";
import {getInstrument} from "../actions/portfolio";
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGrid);
