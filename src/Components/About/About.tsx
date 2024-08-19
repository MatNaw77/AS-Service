import './about.css';
import Button from '../Button/Button';

export default function About () {
    return (
        <div id='about' className='about'>

            <div className='about-container'>
                <div className='about-text'>
                    <div className='about-header'>
                        Mobilny i stacjonarny <br />serwis maszyn <br />budowalnych
                    </div>
                    <div className='about-small-text'>
                        Dzięki zaawansowanym urządzeniom diagnozujemy, <br /> testujemy i monitorujemy maszyny, silniki <br /> oraz instalacje elektryczne
                    </div>
                    <Button text={'Zgłoś awarię'} classme='report-button'/>
                </div>
                <img src="/kopara.png" alt="Kopara Image" className='kopara' />
            </div>
        </div>
    )
}