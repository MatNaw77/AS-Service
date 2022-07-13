import React from "react";
import { useStyles } from './styles';
import { Typography } from "@mui/material";
import text from './text.json';

export const About = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.intro}>
            <div className={`${classes.text} ${classes.introText}`}>
                <span className={classes.introHeader}>
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
            <div className={classes.bg}>
                <div className={classes.about}>
                    <span className={`${classes.aboutHeader} ${classes.text}`}>
                        O nas
                    </span>
                    <Typography className={`${classes.aboutText} ${classes.text}`}>
                        {text.text}
                    </Typography>
                </div>
            </div>
        </>
    );
}