import React from 'react'
import './Confirmation.scss'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
const Confirmation = () => {
    return (
        <div>
            <Header />
            <Category headText={'Order Confirmation'} headP={'-  Shop Category'}></Category>
            <div className='main-confirmation-container'>
                <div className='body-confirmation'>
                    <div className='confirmation-header'>
                        <p className='confirmation-header-p'>Thank you. Your order has been received.</p>
                    </div>

                    <div className='order-info-div'>
                        <div className='order-card-container'>
                            <div className='order-card'>
                                <h3>Order info</h3>
                                <div className='order-card-body'>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Order number</p>
                                        <p className='rigth-p'>: 60235</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Date</p>
                                        <p className='rigth-p'>: Oct 03, 2017</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Total</p>
                                        <p className='rigth-p'>: USD 2210</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Payment method</p>
                                        <p className='rigth-p'>: Check pay</p>
                                    </div>
                                </div>
                            </div>

                            <div className='order-card'>
                                <h3>Billing Address</h3>
                                <div className='order-card-body'>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Street</p>
                                        <p className='rigth-p'>: 56/8 panthapath</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>City</p>
                                        <p className='rigth-p'>: Dhaka</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Country</p>
                                        <p className='rigth-p'>: Bangladesh</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Postcode</p>
                                        <p className='rigth-p'>: 1205</p>
                                    </div>
                                </div>
                            </div>

                            <div className='order-card'>
                                <h3>Order info</h3>
                                <div className='order-card-body'>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Street</p>
                                        <p className='rigth-p'>: 56/8 panthapath</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>City</p>
                                        <p className='rigth-p'>: Dhaka</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Country</p>
                                        <p className='rigth-p'>: Bangladesh</p>
                                    </div>
                                    <div className='order-card-text'>
                                        <p className='left-p'>Postcode</p>
                                        <p className='rigth-p'>: 1205</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='order-details-container'>
                    <h2 className='order-details-h2'>Order Details</h2>
                    <div className='table-product-container'>
                        <div className='table-product-header'>
                            <h5 className='first-product-h5'>Product</h5>
                            <h5 className='second-product-h5'>Quantity</h5>
                            <h5 className='third-product-h5'>Total</h5>
                        </div>

                        <div className='product-name-container'>
                            <p className='product-name'>Pixelstore fresh Blackberry</p>
                            <h5 className='product-count'>x 02</h5>
                            <p className='product-price'>$720.00</p>
                        </div>
                        <div className='product-name-container'>
                            <p className='product-name'>Pixelstore fresh Blackberry</p>
                            <h5 className='product-count'>x 02</h5>
                            <p className='product-price'>$720.00</p>
                        </div>
                        <div className='product-name-container'>
                            <p className='product-name'>Pixelstore fresh Blackberry</p>
                            <h5 className='product-count'>x 02</h5>
                            <p className='product-price'>$720.00</p>
                        </div>

                        <div className='product-name-container'>
                            <h4 className='subTotal-h4'>Subtotal</h4>
                            <h5></h5>
                            <p className='product-price'>$2160.00</p>
                        </div>
                        <div className='product-name-container'>
                            <h4 className='subTotal-h4'>Shipping</h4>
                            <h5></h5>
                            <p className='product-price'>Flat rate: $50.00</p>
                        </div>
                        <div className='product-name-container'>
                            <h4 className='subTotal-h4'>Total</h4>
                            <h5></h5>
                            <p className='product-price'>$2210.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Confirmation;
