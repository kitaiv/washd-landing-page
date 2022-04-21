import {useEffect, useRef, useState} from "react";

import { Breakpoint } from "react-socks";

import HeadShake from 'react-reveal/HeadShake';

import Logo from '../../assets/images/Logo.svg'
import s from './Navigation.module.css'
import Modal from "../../components/Modal";
import mailIcon from '../../assets/images/email-icon.svg'
import phoneIcon from '../../assets/images/phone-icon.svg'
import locationIcon from '../../assets/images/location-icon.svg'
import closeIcon from '../../assets/images/close.svg'

import Button from "../../components/Button";
import SocialNetworks from '../../components/SocialNetworks'
import Input from "../../components/Input";
import Hamburger from "../../components/Hamburger";

import {Link} from 'react-scroll'


const Navigation = () => {

    const ref = useRef();


    const [showModal, setShowModal] = useState(false)
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
        setHamburgerOpen(false)
    }

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    useEffect(() => {
        function handler(event) {
            if (hamburgerOpen) {
                if (!ref.current?.contains(event.target)) {
                    // change starts here
                    setHamburgerOpen(false)
                    // change starts here
                }
            }
        }

        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <>
            <nav className="desktop-nav">
                <div>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={s.navItems}>
                    <Link activeClass="active" to="about-us" spy={true} smooth={true} duration={500}>About Us</Link>
                    <Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link>
                    <Link activeClass="active" to="faq" spy={true} smooth={true} duration={500}>FAQ</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
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
                                    <a href="#" className="emailMobile">
                                        <img src={mailIcon} alt="email"/>
                                        <p>contactl@gmail.com</p>
                                    </a>
                                    <a href="#">
                                        <img src={phoneIcon} alt="phone"/>
                                        <p>+143256987000</p>
                                    </a>
                                    <a href="#" className="adressTextMobile">
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
                                            <Breakpoint customQuery="(min-width: 768px)">
                                                <Button text={'SEND MESSAGE'} styles={{float: 'right'}}/>
                                            </Breakpoint>
                                            <Button text={'SEND MESSAGE'} styles={{width: '100%'}}/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <img className="modal-close"
                                 onClick={handleModal}
                                 src={closeIcon}
                                 alt="close"/>
                        </Modal>
                    ) : null
                }
            </nav>
            <div role="navigation" className="mobile-nav">
                <div>
                    <img src={Logo} alt="Logo"/>
                    <div className="navigation">
                        <ul ref={ref}>
                            <li>
                                <Link onClick={toggleHamburger} activeClass="active" to="about-us" spy={true}
                                      smooth={true} duration={500}>About
                                    Us</Link>
                            </li>
                            <li>
                                <Link onClick={toggleHamburger} activeClass="active" to="service" spy={true}
                                      smooth={true}
                                      duration={500}>Service</Link>
                            </li>
                            <li>
                                <Link onClick={toggleHamburger} activeClass="active" to="faq" spy={true} smooth={true}
                                      duration={500}>FAQ</Link>
                            </li>
                            <li>
                                <Link onClick={toggleHamburger} activeClass="active" to="contact" spy={true}
                                      smooth={true}
                                      duration={500}>Contact</Link>
                            </li>
                            <li>
                                <div onClick={handleModal}>
                                    <Button text={'CONTACT US'} styles={{width: '85%'}}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger-2" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
                </div>
            </div>
            <style jsx="true">{`

              html body {
                overflow: ${hamburgerOpen || showModal ? 'hidden' : 'scroll'}
              }

              .navigation ul {
                display: flex;
                flex-wrap: wrap;

                float: right;
                margin: 0;
                padding: 0px;
                overflow: hidden;
              }

              .mobile-nav {
                margin: 1rem;
              }

              .navigation ul li {
                list-style-type: none;
                padding-right: 10px;
                margin-top: 1.5rem;
                font-size: 7vw;
              }
              
              @media (max-width: 768px){
                // #modal{
                //   width: ${hamburgerOpen ? '100%' : 'auto'};
                //   height: ${hamburgerOpen ? '100%' : 'auto'}
                // }
              }
              
              @media (max-width: 425px){
                .navigation ul {
                  display: ${hamburgerOpen ? 'inline' : 'none'};
                  background-color: #fff;
                  height: 100vh;
                  width: 100%;
                  position: fixed;
                  left: 0;
                  z-index: 15;
                  padding: 2rem;
                  margin: 4rem 0 0 0;
                }
              }
              
              @media (min-width: 426px) {

                .hamburger {
                  display: fixed;
                  padding-top: 10px;
                  margin-left: 10px;
                  z-index: 6;
                }


                .navigation ul {
                  display: ${hamburgerOpen ? 'inline' : 'none'};
                  background-color: #fff;
                  height: 100vh;
                  width: 50vw;
                  position: fixed;
                  z-index: 15;
                  padding: 2rem;
                  margin: 4rem 0 0 0;
                }
                
                .navigation ul li {
                    font-size: 5vw !important;
                  }
              }
            `}</style>
        </>
    )
}

export default Navigation;
