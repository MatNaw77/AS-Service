import React from "react";
import { useStyles } from './styles';
import { Typography } from "@mui/material";

export const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.about}>
            <div className={classes.text}>
                <span className={classes.name}>
                    AS Serwis
                </span>
                <Typography >
                    Diagnostyka 
                    <br />Naprawa instalacji elektrycznych,
                    <br />Naprawa oraz programowanie sterowników,
                    <br />Projektowanie oraz wprowadzenie rozwiązań w zakresie <br />sterowania silnikami spalinowymi i elektrycznymi maszyn oraz urządzeń,
                    <br />Naprawa SCR DPF EGR.
                </Typography>
            </div>
        </div>
    );
}