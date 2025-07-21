import React from 'react'
import Productcard from '../../components/Productcard/Productcard'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'

const Productdetails = () => {
  return (
    <div className='productDetails-container'>
      <Header></Header>
      <Category headText={'Shop Single'} headP={'- Shop Single'}></Category>
        <Productcard>
        </Productcard>
        <Footer></Footer>
    </div>
  )
}

export default Productdetails