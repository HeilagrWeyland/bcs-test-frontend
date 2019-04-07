import {AgGridReact} from "ag-grid-react";
import React, {PureComponent} from "react";
import {AG_GRID_THEME, PORTFOLIO_COLUMN_DEFS, PORTFOLIO_GRID_STYLE} from "../constants/Grid";
import '../styles/Grid.css';
import InstrumentSearch from "../containers/InstrumentSearchContainer";

class PortfolioGrid extends PureComponent {
    componentDidUpdate() {
        const {getQuotes, portfolio} = this.props;
        const symbols = portfolio.map(item =>
            item.symbol).join(',');
        getQuotes(symbols)
    }

    render() {
        const {portfolio, removeItem} = this.props;

        return <>
            <div className={AG_GRID_THEME} style={PORTFOLIO_GRID_STYLE}>
                <AgGridReact
                    columnDefs={PORTFOLIO_COLUMN_DEFS}
                    rowData={portfolio}
                    suppressCellSelection
                    removeItem={removeItem}
                />
            </div>
            <InstrumentSearch/>
        </>
    }
}

export default PortfolioGrid;
