import {Input} from "@material-ui/core";
import React, {PureComponent} from "react";


class InstrumentSearch extends PureComponent {

    render() {
        const {addInstrument, getInstrument, instrument} = this.props;
        const {symbol, companyName} = instrument;
        const FOUNDED_INSTRUMENT = <>{symbol}{symbol && " | "}{companyName}</>;

        return <>
            <Input placeholder='Add instrument'
                   onChange={e => getInstrument(e.target.value)}
                   onKeyPress={e => e.key === 'Enter' ? addInstrument() : ''}
            />
            <span>{FOUNDED_INSTRUMENT}</span>
        </>
    }
}

export default InstrumentSearch;
