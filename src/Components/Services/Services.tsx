import './services.css';
import Image from 'next/image';
import uslugi from '../../../public/uslugi.png';
import Button from '../Button/Button';

export default function Services() {
    return (
        <div id='services' className='services'>
            <div className='header'>
                Usługi
            </div>
            <div className='container'>
                <div className='service service-1l'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Sterowniki
                    </div>
                    <div className='service-description' >
                        Naprawiamy sterowniki silników i innych urządzeń, optymalizując ich pracę oraz zmniejszając zużycie paliwa i poprawiając moment obrotowy. Projektujemy też zastępcze systemy sterowania w razie poważnych usterek.
                    </div>
                </div>
                <div className='service'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Instalacje elektryczne
                    </div>
                    <div className='service-description' >
                        Naprawiamy i odbudowujemy instalacje elektryczne układów sterowania maszyn w budownictwie, rolnictwie i przemyśle. Posiadamy uprawnienia SEP w kategoriach E oraz D.
                    </div>
                </div>
                <div className='service service-1r'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Systemy oczyszczania spalin
                    </div>
                    <div className='service-description' >
                        Oferujemy rozwiązania przywracające prawidłowe działanie systemów oczyszczania spalin w maszynach budowlanych, rolniczych i przemysłowych. Odbudowujemy katalizatory, filtry DPF, pompy AdBlue oraz systemy sterowania.
                    </div>
                </div>
                <div className='service service-1l'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Silniki spalinowe i elektryczne
                    </div>
                    <div className='service-description' >
                        Oferujemy kompleksową diagnostykę silników spalinowych i elektrycznych w maszynach budowlanych, rolniczych i przemysłowych. Identyfikujemy usterki, optymalizujemy wydajność oraz zapewniamy profesjonalne doradztwo techniczne.
                    </div>
                </div>
                <div className='service'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Instalacje hydrauliczne
                    </div>
                    <div className='service-description' >
                        Diagnozujemy instalacje hydrauliczne w maszynach budowlanych, rolniczych i przemysłowych. Wykrywamy i usuwamy usterki, monitorujemy wydajność oraz przeprowadzamy regenerację i naprawy systemów hydraulicznych.
                    </div>
                </div>
                <div className='service service-1r'>
                    <Image src={uslugi} alt="Uslugi" layout="responsive" className='service-image' />
                    <div className='service-header'>
                        Maszyn specjalne
                    </div>
                    <div className='service-description' >
                        Diagnozujemy i usuwamy usterki elektryczne oraz elektroniczne w palnicach, wiertnicach, zamiatarkach, dźwigach, kompresorach i innych urządzeniach. Monitorujemy pracę silników, regenerujemy i naprawiamy osprzęt oraz napędy.
                    </div>
                </div>
            </div>
            <div className='button-div'>
                <Button text={'Dowiedz się więcej'} classme='service-button'/>
            </div>
            
            
        </div>
    )
}