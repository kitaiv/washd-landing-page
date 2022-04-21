import {useState} from 'react'

import {Breakpoint} from "react-socks";

import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';

import s from './Header.module.css'
import Navigation from "../Navigation/Navigation";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

import closeIcon from "../../assets/images/close.svg";
import getStartedImg from '../../assets/images/getstarted-img.svg'
import getStartedImgMobile from '../../assets/images/getstarted-img-mobile.jpg'
import headerImageMobile from '../../assets/images/header-image-mobile.jpg'


const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className={s.headerWrapper}>
            <Navigation/>
            <Breakpoint customQuery="(min-width: 769px)">
                <div className={s.headerBlock}>
                    <div className={s.headerTitle}>
                        <Fade left style={{zIndex: '999'}}>
                            <div className={s.headerTitleWrapper}>
                                <div className={s.bluredBlock}>
                                    <h1><span>Solution</span> for your Laundry Service</h1>
                                </div>
                                <div className={s.headerDescription}>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, eget ipsum sagittis,
                                        adipiscing mi.</h4>
                                </div>
                                <div onClick={handleModal}>
                                    <HeadShake>
                                        <Button text={'GET STARTED'} styles={{width: '20rem'}}/>
                                    </HeadShake>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade right>
                        <div className={s.bgImage1}/>
                    </Fade>
                </div>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 768px)">
                <div className={s.headerBlockMobile}>
                    <div>
                        <Fade right>
                            <div className={s.headerTitleWrapperMobile}>
                                <div className={s.bluredBlockMobile}>
                                    <h1><span>Solution</span> for your Laundry Service</h1>
                                </div>
                            </div>
                            <img src={headerImageMobile} alt="header image"/>
                        </Fade>
                    </div>
                    <div className={s.headerTitleMobile}>
                        <Fade left>
                            <div>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, eget ipsum sagittis,
                                    adipiscing mi.</h4>
                            </div>
                            <div onClick={handleModal}>
                                <HeadShake>
                                    <Button text={'GET STARTED'} styles={{width: '90%'}}/>
                                </HeadShake>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Breakpoint>
            {
                showModal ? (
                    <Modal>
                        <Breakpoint customQuery="(min-width: 769px)">
                            <div className="getstarted-modal-wrapper">
                                <div className="getstarted-modal-left">
                                    <img src={getStartedImg} alt="get started background image"/>
                                </div>
                                <div className="getstarted-modal-right">
                                    <div>
                                        <h1>Get Started</h1>
                                        <h4>Leave your contact for the pre-purchase</h4>
                                        <form action="">
                                            <div className="contact-form-item">
                                                <Input title={'Name'}/>
                                            </div>
                                            <div className="contact-form-item">
                                                <Input title={'Phone Number'} type={'tel'}/>
                                            </div>
                                            <Button text={'SEND'} styles={{width: '75%'}}/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <img className="modal-close"
                                 onClick={handleModal}
                                 src={closeIcon}
                                 alt="close"/>
                        </Breakpoint>
                        <Breakpoint customQuery="(max-width: 768px)">
                            <div className="getstarted-modal-wrapper-mobile">
                                <div>
                                    <img src={getStartedImgMobile} alt="get started background image"/>
                                </div>
                                <div className="getstarted-bottom-content-mobile">
                                    <div>
                                        <h1>Get Started</h1>
                                        <h4>Leave your contact for the pre-purchase</h4>
                                        <form action="">
                                            <div className="contact-form-item">
                                                <Input title={'Name'}/>
                                            </div>
                                            <div className="contact-form-item">
                                                <Input title={'Phone Number'} type={'tel'}/>
                                            </div>
                                            <Button text={'SEND'} styles={{width: '100%'}}/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <img className="modal-close"
                                 onClick={handleModal}
                                 src={closeIcon}
                                 alt="close"/>
                        </Breakpoint>
                    </Modal>
                ) : null
            }
        </div>
    )
}

export default Header
