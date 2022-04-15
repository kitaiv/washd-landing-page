import {useState} from 'react'

import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';

import s from './Header.module.css'
import Navigation from "../Navigation/Navigation";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";

import closeIcon from "../../assets/images/close-dark.svg";
import getStartedImg from '../../assets/images/getstarted-img.svg'

const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className={s.headerWrapper}>
            <Navigation/>
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
                    {
                        showModal ? (
                            <Modal>
                                <div className="getstarted-modal-wrapper">
                                    <div className="getstarted-modal-left">
                                        <img src={getStartedImg} alt="get started background image"/>
                                    </div>
                                    <div className="getstarted-modal-right">
                                        <div>
                                            <h1>Get Started</h1>
                                            <h4>Leave your contact for the pre-purchase</h4>
                                            <form action="">
                                                <Input title={'Name'}/>
                                                <Input title={'Phone Number'} type={'tel'}/>
                                                <Button text={'SEND'} styles={{width: '75%'}}/>
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
                </div>
                <Fade right>
                    <div className={s.bgImage1}/>
                </Fade>
            </div>
        </div>
    )
}

export default Header
