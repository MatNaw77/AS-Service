import './contact.css';
import Button from '../Button/Button';
export default function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className='contact-header' >
                Zgłoś awarię i uzyskaj wycenę!
            </div>
            <div className='contact-container'>
                <div className='contact-form'>

                    <input id="name" className='input' placeholder='Imię i Nazwisko'>
                    </input>
                    <input id="email" className='input' placeholder='E-mail'>
                    </input>
                    <input id="tel" className='input' placeholder='Numer telefonu'>
                    </input>
                    <input id="prod" className='input' placeholder='Producent'>
                    </input>
                    <input id="place" className='input' placeholder='Adres postoju'>
                    </input>
                    <input id="type" className='input' placeholder='Typ maszyny'>
                    </input>
                    <input id="year" className='input' placeholder='Rok produkcji'>
                    </input>
                    <input id="win" className='input' placeholder='Numer WIN'>
                    </input>
                    <textarea id="desc" className='input long-input' placeholder='Kody błedów, opis usterki'>
                    </textarea>
                    <div className='send-div'>
                        <Button text={'Wyślij zgłoszenie'} classme='send-button' />
                    </div>
                </div>
                <div className='contact-info'>
                Aby umożliwić nam jak najszybsze zorganizowanie serwisu, ze względu na specyfikę naszej pracy, zachęcamy do wypełnienia poniższego formularza zgłoszenia naprawy. Dzięki tym informacjom będziemy mogli dokładnie ocenić problem oraz przygotować odpowiednie środki i personel do wykonania naprawy. Wystarczy wysłać zgłoszenie, a my skontaktujemy się z Państwem aby uzgodnić termin i szczegóły naprawy!
                </div>
            </div>
        </div>
    )
}