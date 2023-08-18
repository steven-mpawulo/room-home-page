import React from 'react'
import Header from '../header/Header'
import './main.css'
import arrowLeft from '../../images/icon-arrow - Copy.svg'
import angleLeft from '../../images/icon-angle-left - Copy.svg'
import angleRight from '../../images/icon-angle-right - Copy.svg'

const Main = () => {
  return (
    <main>
        <section className='first-section'>
            <div className="first-section-left">
                <Header/>
            </div>
            <div className="first-section-right">
                <h1>Discover innovate <span>ways to decorate</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam animi eius eligendi accusantium, veniam esse ratione eos? Veniam repellendus deserunt ad sed quisquam laudantium eveniet doloribus fugiat id sequi!</p>
                <div className="first-section-right-inner">
                    <p>SHOP NOW</p>
                    <img src={arrowLeft} alt="arrow-left" />
                </div>
                <div className="container-for-angle-arrows">
                    <img src={angleLeft} alt="angle-left" />
                    <img src={angleRight} alt="amgle-right" />
                </div>
            </div>
        </section>
        <section className='second-section'>
            <div className="second-section-first"></div>
            <div className="second-section-second"></div>
            <div className="second-section-third"></div>

        </section>
    </main>
  )
}

export default Main