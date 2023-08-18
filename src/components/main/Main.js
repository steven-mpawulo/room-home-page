import React from 'react'
import Header from '../header/Header'
import './main.css'
import arrowLeft from '../../images/icon-arrow - Copy.svg'

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
                <div className="first-section-inner">
                    <p>Shop now</p>
                    <img src={arrowLeft} alt="arrow-left" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main