import {useState} from 'react'

import {Breakpoint} from "react-socks";

import {LazyLoadImage} from 'react-lazy-load-image-component';
import HeadShake from 'react-reveal/HeadShake';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';


import s from './Content.module.css'
import img1 from '../../assets/images/section1-img.jpg'
import clothesIcon from '../../assets/images/clothes-icon.svg'
import hairDryerIcon from '../../assets/images/hair-dryer-icon.svg'
import ironIcon from '../../assets/images/iron-icon.svg'
import washingMachineIcon from '../../assets/images/washing-machine-icon.svg'
import lessWaterIcon from '../../assets/images/less-water-icon.svg'
import detergentsIcon from '../../assets/images/detergents-icon.svg'
import saveMoneyIcon from '../../assets/images/save-money-icon.svg'
import easyToOperateIcon from '../../assets/images/easy-to-operate-icon.svg'
import easyToIntegrateIcon from '../../assets/images/easy-to-integrate-icon.svg'
import easyToControlIcon from '../../assets/images/easy-to-integrate-icon.svg'
import company1 from '../../assets/images/company-1.jpg'
import company2 from '../../assets/images/company-2.jpg'
import company3 from '../../assets/images/company-3.jpg'
import company4 from '../../assets/images/company-4.jpg'

import company1mobile from '../../assets/images/company-1-mobile.jpg'
import company2mobile from '../../assets/images/company-2-mobile.jpg'
import company3mobile from '../../assets/images/company-3-mobile.jpg'
import company4mobile from '../../assets/images/company-4-mobile.jpg'

import startWorkingImgMobile from '../../assets/images/start-working-img-mobile.jpg'

import Button from "../../components/Button";
import Card from "../../components/Card";
import Accordion from "../../components/Accordion";

import TestimonialsSlider from "../../components/TestimonialsSlider";
import {Element} from 'react-scroll'
import Modal from "../../components/Modal";
import mailIcon from "../../assets/images/email-icon.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import SocialNetworks from "../../components/SocialNetworks";
import Input from "../../components/Input";
import closeIcon from "../../assets/images/close.svg";
import closeDarkIcon from '../../assets/images/close-dark.svg'
import getStartedImg from "../../assets/images/getstarted-img.svg";

const Content = () => {
    const [showContactModal, setShowContactModal] = useState(false)
    const [showGetStartedModal, setShowGetStartedModal] = useState(false)

    const handleContactModal = () => {
        setShowContactModal(!showContactModal)
    }

    const handleGetStartedModal = () => {
        setShowGetStartedModal(!showGetStartedModal)
    }

    const cards = [
        {
            icon: ironIcon,
            title: 'PLACE RFID TAG ON CLOTHIG',
            text: 'This tag will contain the name, address of the owner, what kind of clothes, what kind of fabric,' +
                ' washing conditions, etc.'

        },
        {
            icon: hairDryerIcon,
            title: 'SCAN THE BAG OF CLOTHES ',
            text: 'Zebra scanner scans a bag of clothes with RFID tags and allows you to instantly see how many' +
                ' items are in the bag.'

        },
        {
            icon: washingMachineIcon,
            title: 'WASHING, DRYING AND FOLDING CLOTHES',
            text: 'Wash, dry and fold the clothes and use the scanner to quickly determine which clothes belong to' +
                ' person A or person B.'

        },
        {
            icon: clothesIcon,
            title: 'EASILY CHECK ALL CLEAN CLOTHES',
            text: 'When everything is done, easily see if all the clothes that arrived at the laundry site match the clothes that leave the laundry site.'

        }
    ]
    const accordionData = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo' +
                ' etiam lacus egestas blandit.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo' +
                ' etiam lacus egestas blandit.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo' +
                ' etiam lacus egestas blandit.'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo' +
                ' etiam lacus egestas blandit.'
        }
    ]

    return(
        <div className={s.contentWrapper}>
            <div className={s.mobilePadding}>
                <Element name="about-us" className="element">
                    <section className={s.section1}>
                        <Fade left>
                            <div>
                                <LazyLoadImage
                                    width={'100%'}
                                    src={img1}
                                    alt={'image'}
                                />
                            </div>
                        </Fade>
                        <Fade right>
                            <div>
                                <div className={s.section1ContentWrapper}>
                                    <h1>Washd <br/>was founded <span>to optimize</span>
                                    </h1>
                                    <h4>
                                        the work in laundries using RFID tags. This allows
                                        to minimize the loss of clothing and, no less important, to save the
                                        environment. The RFID tag
                                        will be steamed on the clothes. This tag will contain information about the
                                        clothing and its owners.
                                        You will be able to wash more clothes with each washing machine, saving the
                                        environment by using less electricity, water and detergents.
                                    </h4>
                                </div>
                            </div>
                        </Fade>
                    </section>
                </Element>
                <Element name="service" className="element">
                    <section className={s.section2}>
                        <h1>How it works</h1>
                        <Flip top>
                            <div className={s.cardsContainer}>
                                {
                                    cards.map((el, key) =>
                                        <Card key={key} icon={el.icon} title={el.title} text={el.text}/>
                                    )
                                }
                            </div>
                        </Flip>
                    </section>
                </Element>
                <section className={s.section3}>
                    <h1 style={{color: '#1B1F3B'}}>Why Choose Washd</h1>
                    <div className={s.howitworks1}>
                        <Rotate top left>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={lessWaterIcon} alt="using less water"/>
                                    <h3>Using less water</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>By washing more clothes with each washing machine, you use less water and take
                                        care
                                        of the environment.</h4>
                                </div>
                            </div>
                        </Rotate>
                        <Roll right>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={detergentsIcon} alt="Using less detergents"/>
                                    <h3>Using less detergents</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>All that extra detergents are not just a waste of money, it gunks up your
                                        machine and shorten the service life of the appliance.</h4>
                                </div>
                            </div>
                        </Roll>
                        <Rotate top right>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={saveMoneyIcon} alt="Saving money"/>
                                    <h3>Saving money</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>You will consume less electricity and save money by washing more clothes with
                                        each washing machine.</h4>
                                </div>
                            </div>
                        </Rotate>
                    </div>
                    <div className={s.howitworks2}>
                        <Rotate bottom left>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={easyToOperateIcon} alt="Easy to operate"/>
                                    <h3>Easy to operate</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>Washd is programmed so that people
                                        with disabilities (hearing impairment, visual impairment, etc) easily can use
                                        the system.</h4>
                                </div>
                            </div>
                        </Rotate>
                        <Flip top>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={easyToIntegrateIcon} alt="Easy to integrate"/>
                                    <h3>Easy to integrate</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>Washd can be integrated with other programs such as ERP systems
                                        and warehouse systems.</h4>
                                </div>
                            </div>
                        </Flip>
                        <Rotate bottom right>
                            <div className={s.cardWrapper}>
                                <div className={s.cardHeader}>
                                    <img src={easyToControlIcon} alt="Easy to control"/>
                                    <h3>Easy to control</h3>
                                </div>
                                <div className={s.cardDescription}>
                                    <h4>You will get full controll of where all the garments in your laudry are located,
                                        all the time, by using new RFID tracking system.</h4>
                                </div>
                            </div>
                        </Rotate>
                    </div>
                    <Breakpoint customQuery="(max-width: 768px)" style={{width: '100%'}}>
                        <div onClick={handleGetStartedModal} style={{width: '100%'}}>
                            <HeadShake>
                                <Button text={'GET STARTED'} styles={{width: '100%'}}/>
                            </HeadShake>
                        </div>
                    </Breakpoint>
                    <Breakpoint customQuery="(min-width: 769px)">
                        <div onClick={handleGetStartedModal}>
                            <HeadShake>
                                <Button text={'GET STARTED'} styles={{width: '20rem'}}/>
                            </HeadShake>
                        </div>
                    </Breakpoint>
                    {
                        showGetStartedModal ? (
                            <Modal>
                                <div className="getstarted-modal-wrapper">
                                    <div className="getstarted-modal-left">
                                        <LazyLoadImage
                                            src={getStartedImg}
                                            alt="Get Started"
                                            visibleByDefault={true}
                                            placeholderSrc={getStartedImg}
                                            effect="blur"
                                            threshold={200}
                                        />
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
                                     onClick={handleGetStartedModal}
                                     src={closeDarkIcon}
                                     alt="close"/>
                            </Modal>
                        ) : null
                    }
                </section>
                <section className={s.section4}>
                    <h2>Local companies that have already Washd</h2>
                    <Breakpoint customQuery="(min-width: 769px)">
                        <div className={s.companiesContainer}>
                            <Fade bottom>
                                <LazyLoadImage
                                    src={company1}
                                    alt="Innovasion Norge"
                                />
                                <LazyLoadImage
                                    src={company2}
                                />
                                <LazyLoadImage
                                    src={company3}
                                />
                                <LazyLoadImage
                                    src={company4}
                                    alt="Zebra"
                                />
                            </Fade>
                        </div>
                    </Breakpoint>
                    <Breakpoint customQuery="(max-width: 768px)">
                        <div className={s.companiesContainerMobile}>
                            <Fade bottom>
                                <div>
                                    <LazyLoadImage
                                        src={company1mobile}
                                        alt="Innovasion Norge"
                                    />
                                    {/*<img src={company1} alt="Innovasion Norge"/>*/}
                                    <LazyLoadImage
                                        src={company2mobile}
                                    />
                                </div>
                                <div>
                                    <LazyLoadImage
                                        src={company3mobile}
                                    />
                                    <LazyLoadImage
                                        src={company4mobile}
                                        alt="Zebra"
                                    />
                                </div>
                            </Fade>
                        </div>
                    </Breakpoint>
                </section>
                <section className={s.section5}>
                    <h1>What clients say about Washd</h1>
                    <TestimonialsSlider/>
                </section>
                <Element name="faq" className="element">
                    <section className={s.section6}>
                        <Fade left>
                            <div className={s.faqLeft} style={{margin: '0'}}>
                                <h1>FAQ</h1>
                                <div className={s.faqSubHeader}>
                                    <div>
                                        <p>Do you have more questions?<br/>
                                            You can ask us at anytime.
                                            Contact us</p>
                                        <div onClick={handleContactModal}>
                                            <HeadShake>
                                                <Button text={'CONTACT US'} styles={{width: '50%'}}/>
                                            </HeadShake>
                                        </div>
                                        {
                                            showContactModal ? (
                                                <Modal>
                                                    <div className="contact-us-modal-wrapper">
                                                        <div className="contact-us-modal-left">
                                                            <h1>Contact us</h1>
                                                            <h4>Fill up the form and our team will get back to you
                                                                within 24 hours.</h4>
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
                                                                        <textarea name="message" id="message" cols="25"
                                                                                  rows="5" required/>
                                                                    </div>
                                                                    <Button text={'SEND MESSAGE'}
                                                                            styles={{float: 'right'}}/>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img className="modal-close"
                                                         onClick={handleContactModal}
                                                         src={closeIcon}
                                                         alt="close"/>
                                                </Modal>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={s.faqRight}>
                                <div className="container">
                                    <div className="accordion">
                                        {accordionData.map(({title, content}, key) => (
                                            <Accordion title={title} content={content} key={key}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </section>
                </Element>
            </div>
            <Breakpoint customQuery="(min-width: 768px)">
                <section className={s.section7}>
                    <div className={s.startWorkingWrapper}>
                        <h1>Start working <br/> with <span>Washd</span> now</h1>
                        <div onClick={handleGetStartedModal}>
                            <HeadShake>
                                <Button text={'GET STARTED'} styles={{width: '35%'}}/>
                            </HeadShake>
                        </div>
                    </div>
                </section>
            </Breakpoint>
            <Breakpoint customQuery="(max-width: 767px)">
                <section className={s.section7Mob}>
                    <div className={s.startWorkingWrapperMob}>
                        <div>
                            <img src={startWorkingImgMobile} alt="start-working-mobile" height="100%;"/>
                        </div>
                        <div className={s.startWorkingText}>
                            <h1>Start working<br/> with <span>Washd</span> now</h1>
                            <div onClick={handleGetStartedModal}>
                                <HeadShake>
                                    <Button text={'GET STARTED'} styles={{width: '90%'}}/>
                                </HeadShake>
                            </div>
                        </div>
                    </div>
                </section>
            </Breakpoint>
        </div>
    )
}

export default Content
