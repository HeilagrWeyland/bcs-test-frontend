import {Button} from "@material-ui/core";
import React from "react";

export const removeButton = (props) =>
    <Button color='secondary'
            onClick={() =>
                props.agGridReact.props.removeItem(props.data.symbol)}>
        Remove
    </Button>;
