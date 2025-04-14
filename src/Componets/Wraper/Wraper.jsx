import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PaperPro from '../PaperPro/PaperPro'
import Snacks from '../Snacks/Snacks'
import Footer from '../Footer/Footer'


function Wraper() {
    return (
        <>
            <Header />
            <Banner />
            <Category />
            <PaperPro />
            <Snacks />
            <Footer />
        </>
    )
}

export default Wraper
