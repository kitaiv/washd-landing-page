import {Breakpoint} from "react-socks";

import Logo from '../../assets/images/Logo-white.svg'
import emailIcon from '../../assets/images/email-icon.svg'
import phoneIcon from '../../assets/images/phone-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'

import SocialNetworks from '../../components/SocialNetworks'

import {Element} from 'react-scroll'

const Footer = () => {
    return (
        <>
            <Breakpoint customQuery="(min-width: 767px)">
                <Element name="contact" className="element">
                    <footer>
                        <div className="top-level-footer">
                            <div>
                                <img src={Logo} alt="Logo"/>
                            </div>
                            <div>
                                <div style={{display: 'flex', marginBottom: '1rem'}}>
                                    <img src={emailIcon} alt="email"/>
                                    <a href="mailto:email@gmail.com">email@gmail.com</a>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <img src={phoneIcon} alt="phone"/>
                                    <a href="tel:+123456987000">+123456987000</a>
                                </div>
                                <p style={{marginTop: '4rem'}}>Privacy Policy</p>
                            </div>
                            <div>
                                <div>
                                    <p style={{marginBottom: '1rem'}}>Washd.id</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <img src={locationIcon} alt="location"/>
                                    <a href="#">Norway, Address 8/1</a>
                                </div>
                                <p style={{marginTop: '4rem'}}>Terms and Conditions</p>
                            </div>
                            <div>
                                <SocialNetworks/>
                            </div>
                        </div>
                    </footer>
                </Element>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 767px)">
                <Element name="contact" className="element">
                    <footer>
                        <div className="mobile-footer">
                            <div className="logo-center-mob">
                                <img src={Logo} alt="Logo"/>
                            </div>
                            <div>
                                <div style={{display: 'flex', marginBottom: '1rem'}}>
                                    <img src={emailIcon} alt="email"/>
                                    <a href="mailto:email@gmail.com">email@gmail.com</a>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <img src={phoneIcon} alt="phone"/>
                                    <a href="tel:+123456987000">+123456987000</a>
                                </div>
                            </div>
                            <div style={{marginTop: '2rem'}}>
                                <div>
                                    <p>Washd.id</p>
                                </div>
                                <div style={{display: 'flex', marginTop: '1rem'}}>
                                    <img src={locationIcon} alt="location"/>
                                    <a href="#">Norway, Address 8/1</a>
                                </div>
                            </div>
                            <div style={{margin: '2rem 0 2rem 0'}}>
                                <SocialNetworks/>
                            </div>
                            <p style={{marginTop: '4rem'}}>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </footer>
                </Element>
            </Breakpoint>

            <style jsx="true">{`
                .mobile-footer{
                    color: white;
                    padding: 1rem;
                }
                
                .mobile-footer a{
                    color: white;
                }
                
                .logo-center-mob{
                  display: flex;
                  justify-content: center;
                  margin-bottom: 3rem;
                  height: auto;
                }
            `}</style>
        </>
    )
}

export default Footer
