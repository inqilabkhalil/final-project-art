import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.scss'
import Browse from '../../components/Browse/Browse'
import Product from '../../components/Product/Product'
import Sale from '../../components/Sale/Sale'
import News from '../../components/News/News'
import Bestseller from '../../components/Bestseller/Bestseller'
import Newsupdate from '../../components/News/Newsupdate'

const Home = () => {


  return (
    <div className='home-div'>
      <Header></Header>
      <Browse />
      <Product></Product>
      <Sale />
      <Bestseller></Bestseller>
      <News />
      <Newsupdate></Newsupdate>



      <Footer></Footer>

    </div>
  )
}

export default Home