import ServiceIcon from "../Icons/ServiceIcon"
import './navbar.css'
import Button from "../Button/Button"

export default function Navbar() {
    return (
        <nav className="navbar"> 
            <div className='logo-icon'>
                AS SERWIS
            </div>
            <ul className="links">
                <li className='element'><a href="#services">Usługi</a></li>
                <li className='element'><a href="#contact">Kontakt</a></li>
                <li className='element'><a href="#realisations">Realizacje</a></li>
                <Button text={'Zgłoś awarię'} classme='report-button'/>
            </ul>
            
        </nav>
    )
}