import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import Banner1 from '../../Images/service1.jpg';
import Banner2 from '../../Images/service2.jpg';
import Banner3 from '../../Images/service3.jpg';

const useStyles = makeStyles({
    image: {
        width: "100%",
        height: 280,
    },
    carousel: {
        width: "100%",
        
    },
    buttons: {
        background: "#fff",
        color: "#494949",
        borderRadius: 0,
        margin: 0,
    }
});

const Banner = () => {
    const classes = useStyles();

    return (
        <Carousel
            autoplay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={false}
            cycleNavigation={true}
            className={classes.carousel}
        >
            <img src={Banner1} className={classes.image} alt='zdj1' />
            <img src={Banner2} className={classes.image} alt='zdj2' />
            <img src={Banner3} className={classes.image} alt='zdj2' />
        </Carousel>
    );
};

export default Banner;