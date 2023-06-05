import React from 'react'
import "./Hero.css"
import { GoLocation } from "react-icons/go"
import CountUp from "react-countup"
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter  hero-container '>
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle' />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >
                            <h1>Discover <br /> Most Suitable<br /> Property </h1>
                        </motion.h1>
                    </div>

                    <div className='flexColStart hero-des'>
                        <span className='secondaryText'>Find a variety of properties that suit you very</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='flexCenter search-bar'>
                        <GoLocation color="var(--blue)" size={20} />
                        <input type='text' />
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Preimium Products</span>
                        </div>

                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Products</span>
                        </div>

                        <div className='flexColStart stat'>
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winnings</span>
                        </div>
                    </div>
                </div>

                <div className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero