"use client";
import './contact.css';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { client } from '@/sanity/lib/client';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        factory: '',
        address: '',
        machineType: '',
        yearProduction: '',
        winNumber: '',
        description: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            description: e.target.value
        });
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const doc = {
                _type: 'requests',
                ...formData,
                yearProduction: parseInt(formData.yearProduction, 10)
            };
            await client.create(doc);
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
          
              if (response.ok) {
                alert('Zgłoszenie zostało pomyślnie wysłane!');
              } else {
                alert('Wystąpił błąd podczas wysyłania e-maila.');
              }
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                factory: '',
                address: '',
                machineType: '',
                yearProduction: '',
                winNumber: '',
                description: ''
            });
        } catch (error) {
            console.error('Błąd podczas wysyłania zgłoszenia:', error);
            alert('Wystąpił błąd. Spróbuj ponownie później.');
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-header' >
                Zgłoś awarię i uzyskaj wycenę!
            </div>
            <div className='contact-container'>
                <div className='contact-form'>
                    <input
                        className='input'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Imię i nazwisko"
                    />
                    <input
                        className='input'
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                    />
                    <input
                        className='input'
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Numer telefonu"
                    />
                    <input
                        className='input'
                        type="text"
                        name="factory"
                        value={formData.factory}
                        onChange={handleChange}
                        placeholder="Producent"
                    />
                    <input
                        className='input'
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Adres postoju"
                    />
                    <input
                        className='input'
                        type="text"
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleChange}
                        placeholder="Typ maszyny"
                    />
                    <input
                        className='input'
                        type="text"
                        name="yearProduction"
                        value={formData.yearProduction}
                        onChange={handleChange}
                        placeholder="Rok produkcji"
                    />
                    <input
                        className='input'
                        type="text"
                        name="winNumber"
                        value={formData.winNumber}
                        onChange={handleChange}
                        placeholder="Numer WIN"
                    />
                    <textarea
                        className='input long-input'
                        name="description"
                        value={formData.description}
                        onChange={handleChangeDescription}
                        placeholder="Kody błedów, opis usterki"
                    />
                    <div className='send-div'>
                        <button className='send-button' onClick={handleSubmit}>
                            Wyślij zgłoszenie
                        </button>
                    </div>
                </div>
                <div className='contact-info'>
                    Aby umożliwić nam jak najszybsze zorganizowanie serwisu, ze względu na specyfikę naszej pracy, zachęcamy do wypełnienia poniższego formularza zgłoszenia naprawy. Dzięki tym informacjom będziemy mogli dokładnie ocenić problem oraz przygotować odpowiednie środki i personel do wykonania naprawy. Wystarczy wysłać zgłoszenie, a my skontaktujemy się z Państwem aby uzgodnić termin i szczegóły naprawy!
                </div>
            </div>
        </div>
    )
}