import React from 'react'
import "./Contacts.css"
import { MdCall } from "react-icons/md"
import { BsChatDotsFill, BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2"
const Contacts = () => {
    return (
        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>

                <div className='flexColStart c-left'>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

                    <div className='flexColStart contactModes'>
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>

                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className='button'>
                                    Contact Us
                                </button>
                            </div>

                            <div className='flexColCenter mode'>

                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className='button'>
                                    Chat Now
                                </button>
                            </div>

                        </div>

                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>

                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className='button'>
                                    Call Now
                                </button>
                            </div>

                            <div className='flexColCenter mode'>

                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className='button'>
                                    Message Now
                                </button>
                            </div>

                        </div>

                    </div>


                </div>

                <div className='c-right'>
                    <div className='image-container'>
                        <img src='./contact.jpg' alt='' />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contacts