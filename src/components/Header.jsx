import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Wey
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
