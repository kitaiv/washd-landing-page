import HeadShake from 'react-reveal/HeadShake';

import Logo from '../../assets/images/Logo.svg'
import s from './Navigation.module.css'
import {useState} from "react";
import Modal from "../../components/Modal";
import mailIcon from '../../assets/images/email-icon.svg'
import phoneIcon from '../../assets/images/phone-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'
import closeIcon from '../../assets/images/close.svg'

import Button from "../../components/Button";
import SocialNetworks from '../../components/SocialNetworks'
import Input from "../../components/Input";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navigation = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return(
        <nav>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className={s.navItems}>
                <Link activeClass="active" to="about-us" spy={true} smooth={true} duration={500} >About Us</Link>
                <Link activeClass="active" to="service" spy={true} smooth={true} duration={500} >Service</Link>
                <Link activeClass="active" to="faq" spy={true} smooth={true} duration={500} >FAQ</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
            </div>
            <div onClick={handleModal}>
                <HeadShake>
                    <Button text={'CONTACT US'}/>
                </HeadShake>
            </div>
            {
                showModal ? (
                    <Modal>
                        <div className="contact-us-modal-wrapper">
                            <div className="contact-us-modal-left">
                                <h1>Contact us</h1>
                                <h4>Fill up the form and our team will get back to you within 24 hours.</h4>
                                <a href="#">
                                    <img src={mailIcon} alt="email"/>
                                    <p>contactl@gmail.com</p>
                                </a>
                                <a href="#">
                                    <img src={phoneIcon} alt="phone"/>
                                    <p>+143256987000</p>
                                </a>
                                <a href="#" style={{marginBottom: '4rem'}}>
                                    <img src={locationIcon} alt="location"/>
                                    <p>Norway, Address 8/1</p>
                                </a>
                                <SocialNetworks/>
                            </div>
                            <div className="contact-us-modal-right">
                                <div className="contact-form-wrapper">
                                    <form action="">
                                        <Input title={'Name'}/>
                                        <Input title={'Email'} type={'email'}/>
                                        <div>
                                            <h5>Message</h5>
                                            <textarea name="message" id="message" cols="25" rows="5" required/>
                                        </div>
                                        <Button text={'SEND MESSAGE'} styles={{float: 'right'}}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <img  className="modal-close"
                              onClick={handleModal}
                              src={closeIcon}
                              alt="close"/>
                    </Modal>
                ) : null
            }
        </nav>
    )
}

export default Navigation;
