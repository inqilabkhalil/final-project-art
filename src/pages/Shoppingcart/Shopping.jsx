
import Uparrow from '../../components/Svg/Uparrow'
import Downarrow from '../../components/Svg/Downarrow'
import './Shopping.scss'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Category from '../../components/Category/Category'

const Shopping = () => {
    const [firstCount, setFirstCount] = useState(1);
    const [secondCount, setSecondCount] = useState(1);
    const [thirdCount, setThirdCount] = useState(1);
    const [firstPrice, setFirstPrice] = useState('$720.00')


    let firstRaisePrice = () => {
        setFirstCount(firstCount + 1)


    }
    let firstLowerPrice = () => {
        if (firstCount > 0) {
            setFirstCount(firstCount - 1)
        }
    }
    let secondRaisePrice = () => {
        setSecondCount(secondCount + 1)


    }
    let secondLowerPrice = () => {
        if (secondCount > 0) {
            setSecondCount(secondCount - 1)
        }
    }
    let thirdRaisePrice = () => {
        setThirdCount(thirdCount + 1)


    }
    let thirdLowerPrice = () => {
        if (thirdCount > 0) {
            setThirdCount(thirdCount - 1)
        }
    }

    return (
        <div className="main-shopping-container">
            <Header></Header>
            <Category headText={'Shopping Cart'} headP={'-  Shopping Cart'}></Category>
            <div className="body-shopping-container">
                <div className='header-shopping'>
                    <p className='header-shopping-product-p'>Product</p>
                    <div className='header-shopping-product-div'>
                        <p className='header-shopping-product-p'>Price</p>
                        <p className='header-shopping-product-p header-shopping-product-p-margin'>Quantity</p>
                        <p className='header-shopping-product-p header-shopping-product-p-margin'>Total</p>
                    </div>


                </div>
                <div className='items-shopping'>
                    <div className='left-items-shopping'>
                        <img src="https://preview.colorlib.com/theme/aroma/img/cart/cart1.png" alt="" />
                        <p className='left-items-shopping-p'>Minimalistic shop for multipurpose use</p>
                    </div>
                    <div className='rigth-items-shopping'>
                        <h5 className='rigth-items-price'>$360.00</h5>
                        <div className='item-count'>
                            <button className='up-arrow' onClick={firstLowerPrice}><Downarrow /></button>
                            <p className='item-count-p'>
                                {firstCount}
                            </p>

                            <div className='item-count-button'>
                                <button className='down-arrow' onClick={firstRaisePrice}><Uparrow /></button>

                            </div>
                        </div>
                        <h5 className='rigth-items-total'>$720.00</h5>

                    </div>
                </div>
                <div className='items-shopping'>
                    <div className='left-items-shopping'>
                        <img src="https://preview.colorlib.com/theme/aroma/img/cart/cart2.png" alt="" />
                        <p className='left-items-shopping-p'>Minimalistic shop for multipurpose use</p>
                    </div>
                    <div className='rigth-items-shopping'>
                        <h5 className='rigth-items-price'>$360.00</h5>
                        <div className='item-count'>
                            <button className='up-arrow' onClick={secondLowerPrice}><Downarrow /></button>
                            <p className='item-count-p'>
                                {secondCount}
                            </p>

                            <div className='item-count-button'>
                                <button className='down-arrow' onClick={secondRaisePrice}><Uparrow /></button>

                            </div>
                        </div>
                        <h5 className='rigth-items-total'>$720.00</h5>

                    </div>
                </div>
                <div className='items-shopping'>
                    <div className='left-items-shopping'>
                        <img src="https://preview.colorlib.com/theme/aroma/img/cart/cart3.png" alt="" />
                        <p className='left-items-shopping-p'>Minimalistic shop for multipurpose use</p>
                    </div>
                    <div className='rigth-items-shopping'>
                        <h5 className='rigth-items-price'>$360.00</h5>
                        <div className='item-count'>
                            <button className='up-arrow' onClick={thirdLowerPrice}><Downarrow /></button>
                            <p className='item-count-p'>
                                {thirdCount}
                            </p>

                            <div className='item-count-button'>
                                <button className='down-arrow' onClick={thirdRaisePrice}><Uparrow /></button>

                            </div>
                        </div>
                        <h5 className='rigth-items-total'>$720.00</h5>

                    </div>
                </div>
                <div className='update-container'>
                    <button className='update-cart' >
                        Update Cart
                    </button>
                    <div className='rigth-update-cart'>
                        <input type="text" placeholder='Coupon Code' className='rigth-update-input' />
                        <button className='apply-button'>Apply</button>
                        <button className='apply-coupon'>
                            Have a Coupon
                        </button>

                    </div>

                </div>
                <div className='subTotal-div'>
                    <h5 className='subTotal-h5'>Subtotal</h5>
                    <h5 className='subTotal-price-h5'>$2160.00</h5>


                </div>
                <div className='shipping-down-div'>
                    <div className='shipping-down-first-section'>
                        <h5 className='shipping-down-first-section-h5'>Shipping</h5>
                        <div className='first-section-rigth'>
                            <div className='input-item'>
                                <p>Flat Rate: $5.00</p>
                                <input type="checkbox" />
                            </div>
                            <div className='input-item'>
                                <p>Free Shipping</p>
                                <input type="checkbox" />
                            </div>
                            <div className='input-item'>
                                <p>Flat Rate: $10.00  </p>
                                <input type="checkbox" />
                            </div>
                            <div className='input-item'>
                                <p>Local Delivery: $2.00</p>
                                <input type="checkbox" />
                            </div>

                        </div>
                    </div>
                    <div className='shipping-down-second-section'>
                        <h5 className='shipping-down-second-section-h5'>Calculate Shipping </h5>
                        <div className='shipping-down-second-section-select'>
                            <select name="" id="">
                                <option value="">Bangaldesh</option>
                                <option value="">India</option>
                                <option value="">Pakistan</option>
                            </select>
                            <select name="" id="">
                                <option value="">Select a state</option>
                                <option value="">Select a state</option>
                                <option value="">Select a state</option>
                            </select>
                            <input type="text" placeholder='Postcode/Zipcode' />
                        </div>
                        <button className='update-details'>Update Details</button>

                    </div>


                </div>
                <div className='proceed-checkout'>
                    <a className='continue-a'>Continue Shopping</a>
                    <a className='proceed-a'>Proceed to checkout</a>

                </div>
                <div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Shopping