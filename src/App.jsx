
import { Route, Routes } from 'react-router'
import './App.css'
import User from './Componets/User/User'
import Wraper from './Componets/Wraper/Wraper'
import Cart from './Componets/Cart/Cart'
import { useEffect, useState } from 'react'
import categoryProduct from '../DairyProduct.js'
import PaperProduct from '../Paper.js'
import SnacksProduct from '../Snacks.js'




function App() {

  const [productCartId, setProductCartId] = useState('')
  const [category, setCategory] = useState([])

  useEffect(() => {
    const productFilterData = categoryProduct.filter((data) => {
      return data.id === productCartId
    })
    setCategory([...category, ...productFilterData])
  }, [productCartId])

  const [paperProdctId, setPaperProdctId] = useState('');
  const [paperCartProduct, setPaperCartProduct] = useState([]);

  useEffect(() => {
    const paperFilterdata = PaperProduct.filter((data) => {
      return data.id === paperProdctId
    })
    setPaperCartProduct([...paperCartProduct, ...paperFilterdata])
  }, [paperProdctId])


  const [snackProdctId, setSnackProdctId] = useState('');
  const [snackCartProduct, setSnackCartProduct] = useState([]);

  useEffect(() => {
    const snackCartProductFilter = SnacksProduct.filter((data) => {
      return data.id === snackProdctId
    })
    setSnackCartProduct([...snackCartProduct, ...snackCartProductFilter])
  }, [snackProdctId])



  

  return (
    <>

      <Routes>
        <Route path='/' element={<Wraper paperCartProduct={paperCartProduct} category={category} snackCartProduct={snackCartProduct} setSnackProdctId={setSnackProdctId} setProductCartId={setProductCartId} setPaperProdctId={setPaperProdctId} />} />
        <Route path='/user' element={<User />} />
        <Route path='/cart' element={<Cart snackCartProduct={snackCartProduct} setSnackCartProduct={setSnackCartProduct} category={category} setCategory={setCategory} paperCartProduct={paperCartProduct} setPaperCartProduct={setPaperCartProduct} />} />
      </Routes>
    </>
  )
}

export default App
