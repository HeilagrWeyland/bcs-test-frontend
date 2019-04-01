import Grid from "@material-ui/core/Grid";
import {AgGridReact} from "ag-grid-react";
import React, {PureComponent} from "react";
import {AG_GRID_THEME, PORTFOLIO_COLUMN_DEFS, PORTFOLIO_GRID_STYLE} from "../constants/Grid";
import '../styles/Grid.css';
import InstrumentSearch from "../containers/InstrumentSearchContainer";

class PortfolioGrid extends PureComponent {
    render() {
        const {portfolio} = this.props;

        return <Grid item xs={12}>
            <div className={AG_GRID_THEME} style={PORTFOLIO_GRID_STYLE}>
                <AgGridReact
                    columnDefs={PORTFOLIO_COLUMN_DEFS}
                    rowData={portfolio}
                />
            </div>
            <InstrumentSearch/>
        </Grid>
    }
}

export default PortfolioGrid;
