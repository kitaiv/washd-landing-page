import Logo from '../../assets/images/Logo-white.svg'
import emailIcon from '../../assets/images/email-icon.svg'
import phoneIcon from '../../assets/images/phone-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'

import SocialNetworks from '../../components/SocialNetworks'

import { Element } from 'react-scroll'

const Footer = () => {
    return(
        <Element name="contact" className="element" >
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
    )
}

export default Footer
