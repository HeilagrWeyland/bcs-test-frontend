import {removeButton} from "../cellRenderers";

export const AG_GRID_THEME = 'ag-theme-material';

export const PORTFOLIO_GRID_STYLE = {height: '70vh', position: 'relative'};

export const PORTFOLIO_COLUMN_DEFS = [
    {
        field: 'symbol'
    },
    {
        field: 'companyName'
    },
    {
        field: 'primaryExchange'
    },
    {
        field: 'open'
    },
    {
        field: 'close'
    },
    {
        cellRendererFramework: removeButton
    }
];
