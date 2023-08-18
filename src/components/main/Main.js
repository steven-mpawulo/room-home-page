import React from 'react'
import Header from '../header/Header'
import './main.css'

const Main = () => {
  return (
    <main>
        <section className='first-section'>
            <div className="first-section-left">
                <Header/>
            </div>
            <div className="first-section-right"></div>
        </section>
    </main>
  )
}

export default Main