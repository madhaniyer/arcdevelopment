import React, {useState, useEffect} from 'react';
import  AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg"
import Grid from '@material-ui/core/Grid';

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo:   {
        height: "8em"
    },
    logoContainer:   {
        padding: 0,
        "&:hover": {
            backgroundColor:"transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px"
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover":  {
            opacity: 1
        }
    }
}));


export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);


    const handleChange = (e,value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }


    useEffect(() => {
        if(window.location.pathname==="/" && value !== 0 ) {
            setValue(0);
        } else if(window.location.pathname==="/huts" && value !== 1 ) {
            setValue(1);
        } else if(window.location.pathname==="/campsites" && value !== 2 ) {
            setValue(2);
        } else if(window.location.pathname==="/tracksections" && value !== 3 ) {
            setValue(3);
        } else if(window.location.pathname==="/lodges" && value !== 4 ) {
            setValue(4);
        } else if(window.location.pathname==="/greatwalks" && value !== 5 ) {
            setValue(5);
        }
    }, [value])

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <ToolBar disableGutters>
                        <Button component={Link} to={"/"} className={classes.logoContainer} 
                        disableRipple onClick={()=> setValue(0)} >
                            <img alt="company logo" src={logo} className={classes.logo}/>
                        </Button>
                        <Tabs
                            value={value} 
                            onChange={handleChange}
                            className={classes.tabContainer} 
                            indicatorColor="primary"
                        >
                            <Tab className={classes.tab} component={Link} to="/" label="Home" />
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined} 
                                onClick={handleClick}
                                className={classes.tab} component={Link} to="/huts" label="Huts" />
                            <Tab className={classes.tab} component={Link} to="/campsites" label="Camp Sites" />
                            <Tab className={classes.tab} component={Link} to="/tracksections" label="Track Sections" />
                            <Tab className={classes.tab} component={Link} to="/lodges" label="Lodges" />
                            <Tab className={classes.tab} component={Link} to="/greatwalks" label="Great Walks" />
                        </Tabs>
                    </ToolBar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
