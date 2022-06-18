import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar () {
    return (
        <section>
            <div className="navbar-fixed">
                <nav className="purple">
                        <div id="113" className="nav-wrapper container">
                            <AnchorLink id="111" href="!#" className="brand-logo">AS-Service</AnchorLink>
                            <AnchorLink id="112" href="mobile-demo" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </AnchorLink>
                        
                            <ul className="right hide-on-med-and-down">
                                <li><AnchorLink href="#home">Home</AnchorLink></li>
                                <li><AnchorLink href="#about">About Us</AnchorLink></li>
                                <li><AnchorLink href="#services">Services</AnchorLink></li>
                                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                            </ul>
                    </div>
                </nav>
            </div>
            <div >
            <ul className="sidenav" id="mobile-demo">
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#about">About Us</AnchorLink></li>
                <li><AnchorLink href="#services">Services</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
            </div>
        </section>
    )
};