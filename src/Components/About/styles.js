import { makeStyles } from "@mui/styles";
import BackgroundImg from '../../assets/Images/about_background.jpg';

export const useStyles = makeStyles({
    intro: {
        backgroundImage: `url(${BackgroundImg})`,
        '-webkit-background-size': 'cover',
        ' -moz-background-size': 'cover',
        ' -o-background-size': 'cover',
        '  background-size': 'cover',
        height: '500px',
        // width: '100vw',
        paddingTop: '30px',
        position: 'relative'
    },
    bg: {
        // width: '100vw',
        backgroundColor: '#61505f',
        position: 'relative'
    },
    text: {
        color: 'white',
        position: 'relative',
        fontFamily: 'sans-serif',
    },
    introText: {
        paddingLeft: '20%',
        paddingTop: '150px',
    },
    introHeader: {
        fontSize: '50px',
        fontWeight: '700'
    },
    
    about: {
        paddingTop: '15px',
        width: '100%',
        textAlign: 'center',
    },
    aboutHeader: {
        marginTop: '20px',
        fontSize: '35px',
        fontWeight: '700'
    },
    aboutText: {
        textAlign: 'left',
        padding: '20px 20% 30px 20%',
    }

});