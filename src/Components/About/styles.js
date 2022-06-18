import { makeStyles } from "@mui/styles";
import BackgroundImg from '../../Images/about_background.jpg';

export const useStyles = makeStyles({
    about: {
        backgroundImage: `url(${BackgroundImg})`,
        height: '500px',
        width: '100vw',
        marginTop: '30px',
        position: 'relative'
    },
    text: {
        color: 'white',
        position: 'relative',
        marginLeft: '20%',
        paddingTop: '150px',
        fontFamily: 'sans-serif',
    },
    name: {
        fontSize: '50px',
        fontWeight: '700'
    }
});