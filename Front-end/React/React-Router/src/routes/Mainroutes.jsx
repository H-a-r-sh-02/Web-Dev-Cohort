import { Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import About from '../components/About'
import Service from '../components/Service'
import Home from '../components/Home'
import Productdetails from '../components/Productdetails'


const Mainroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/details/:name" element={<Productdetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

  )
}

export default Mainroutes