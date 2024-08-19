import './checkUs.css';
import Image from 'next/image';
import uslugi from '../../../public/uslugi.png';
import Button from '../Button/Button';

export default function CheckUs() {
    return (
        <div id='check-us' className='check-us'>
            <div className='check-header'>
                Zobacz jak działamy
            </div>
            <div className='check-text' >
            Zapewniamy kompleksowe usługi serwisowe oraz diagnostykę instalacji elektrycznych i elektronicznych, działając stacjonarnie oraz mobilnie na terenie Polski, Czech, Słowacji i innych krajów. Nasz zespół wyposażony jest we wszystkie niezbędne narzędzia, co pozwala nam skutecznie przywracać sprawność maszyn naszych klientów.  Zapraszamy do zapoznania się z galerią naszych realizacji!
            </div>
            <Image src={uslugi} alt="Uslugi" layout="responsive" className='check-image' />
            <div className='real-div'>
                <Button text='Nasze Realizacje' classme='check-button' />
            </div>

        </div>
    )
}