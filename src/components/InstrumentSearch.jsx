import {Input} from "@material-ui/core";
import React, {PureComponent} from "react";
import find from 'lodash/find';

class InstrumentSearch extends PureComponent {

    addInstrument(target, instrument) {
        const {addInstrument, portfolio} = this.props;
        const instrumentNotExisted = find(portfolio, item =>
            item.symbol === instrument.symbol) === undefined;

        if (instrumentNotExisted) {
            addInstrument(target)
        }
    }

    render() {
        const {getInstrument, instrument} = this.props;
        const {symbol, companyName} = instrument;
        const foundedInstrument = <>{symbol}{symbol && " | "}{companyName}</>;


        return <>
            <Input placeholder='Add instrument'
                   autoFocus
                   onChange={e => getInstrument(e.target.value)}
                   onKeyPress={e => e.key === 'Enter' ?
                       this.addInstrument(e.target.value, instrument) : ''}
            />
            <span>{foundedInstrument}</span>
        </>
    }
}

export default InstrumentSearch;
