import { Route, Routes } from 'react-router-dom'
import './tailwind.css'
import AllProducts from './screens/AllProducts'
import Product from './screens/Product'
function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={ <AllProducts /> } />
        <Route path='product/:id' element={ <Product /> } />
      
      </Routes>
    </>
  )
}

export default App
