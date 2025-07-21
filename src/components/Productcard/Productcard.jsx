import React from 'react'
import Heart from '../Svg/Heart'
import Diamond from '../Svg/Diamond'
import './Productcard.scss'
import Reviews from '../Comments/Reviews'
const Productcard = () => {
  return (
    <div className='mainProductCard-div'>
      <div className='productCard-container'>
        <div className='productCard-img'>
          <img src="	https://preview.colorlib.com/theme/aroma/img/category/s-p1.jpg" alt="" />
        </div>
        <div className='productCard-texts'>
          <h3 className='productCard-h3'>Faded SkyBlu Denim Jeans</h3>
          <h2 className='productCard-h2'>$149.99</h2>
          <div className='productCard-a-div'>
            <a href="#" className='product-first-a'>Category</a>
            <a href="#" className='product-second-a'> : Household</a>
          </div>
          <div className='productCard-a-div'>
            <a href="#" className='product-first-a'>Availibility</a>
            <a href="#" className='product-second-a'> : InStock</a>
          </div>
          <p className='productCard-p'>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
          <div className='amount-div'>
            <label htmlFor="amount">Quantity:</label>
            <input type="text" value={'1'} name='amount' />
            <a href="#">
              Add to Cart
            </a>
          </div>
          <div className='productCard-svg-div'>
            <div className='heart-container'>
              <Heart></Heart>
            </div>
            <div className='diamond-container'>
              <Diamond></Diamond>
            </div>
          </div>
        </div>

      </div>
      <div className='productCard-comments'>
        <button>Description</button>
        <button>Specification</button>
        <button>Comments</button>
        <button>
          Reviews
        </button>

      </div>
      <Reviews></Reviews>
    </div>
  )
}

export default Productcard