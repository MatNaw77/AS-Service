import './footer.css';
import Button from '../Button/Button';

export default function Footer() { 
    return (
        <div id='footer' className='footer'>
            <div className='footer-container' >
                <div className='footer-info'>
                    <div className='footer-log'>
                        AS SERWIS
                    </div>
                    <div className='name-footer'>
                        Andrzej Siemienik
                    </div>
                    <div className='address-footer'>
                    Krzywa 4, 43-430 Skoczów<br/>NIP: 548 111 00 05<br/>Godziny pracy: pon-pt 6:00-22:00
                    </div>
                </div>
                <div className='footer-divider' />
                <div className='footer-links'>
                    <span className='footer-link' >Home</span>
                    <span className='footer-link'>Kontakt</span>
                    <span className='footer-link'>Usługi</span>
                    <span className='footer-link'>Nasze realizacje</span>
                    <span className='footer-link'>Polityka prywatności</span>
                    <span className='footer-link'>Polityka cookies</span>
                </div>
                <div className='footer-divider' />
                <div className='con'>
                    <span className='footer-help'>Potrzebujesz pomocy?</span>
                    <Button text='Skontaktuj się!' classme='footer-button'/>
                </div>
            </div>
        </div>
    )
}