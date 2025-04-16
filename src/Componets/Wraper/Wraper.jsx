import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PaperPro from '../PaperPro/PaperPro'
import Snacks from '../Snacks/Snacks'
import Footer from '../Footer/Footer'


function Wraper({setProductCartId,setPaperProdctId,setSnackProdctId,paperCartProduct,category,snackCartProduct}) {
    return (
        <>
            <Header  snackCartProduct={snackCartProduct} paperCartProduct={paperCartProduct} category={category}/>
            <Banner />
            <Category setProductCartId={setProductCartId}/>
            <PaperPro setPaperProdctId={setPaperProdctId}/>
            <Snacks setSnackProdctId={setSnackProdctId}/>
            <Footer />
        </>
    )
}

export default Wraper
