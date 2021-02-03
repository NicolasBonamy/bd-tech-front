import React from 'react'
import Footer from '../../commons/Footer/Footer'
import Header from '../../commons/Header/Header'

function Home() {
    return (
        <div>
            <Header />
            <h3>{localStorage.getItem('pseudoBD')}</h3>
            <h2>Ma collection :</h2>
            <Footer />
        </div>
    )
}

export default Home
