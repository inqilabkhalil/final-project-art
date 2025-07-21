import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Productcheckout.scss'
import Category from '../../components/Category/Category'
const Productcheckout = () => {
    return (
        <div>
            <Header></Header>
            <Category headText={'Product Checkout'} headP={'-  Checkout'}></Category>
            <div className="productCheckOut-container">
                <div className="productCheckout-main-section">
                    <div className="returning-customer">
                        <div className="returing-header">
                            <h2 className="returing-header-h2">
                                Returning Customer?
                            </h2>
                            <a href="#" className="returing-header-a">
                                Click here to login
                            </a>

                        </div>
                        <p className="returing-header-p">
                            If you have shopped with us before, please enter your details in the boxes below. If you are a new customer,<br></br> please proceed to the Billing & Shipping section.
                        </p>
                        <form className='returingForm'>
                            <div className="inputs-container">
                                <input type="text" placeholder="Username or Email" className='register-input' />
                                <input type="password" placeholder="Password" className='register-input' />
                            </div>
                            <div className="login-div">
                                <button type="submit">
                                    login
                                </button>
                                <input type="checkbox" id="returing-checkbox" />
                                <label htmlFor="returing-checkbox">Remember me</label>

                            </div>
                        </form>
                        <p className="lostPassword-p">Lost your password</p>
                    </div>
                    <div className="coupon-container">
                        <div className="coupon-header">
                            <h2 className='returing-header-h2'>Have a coupon? </h2>
                            <a href="#">Click here to enter your code</a>
                        </div>
                        <div className='select-coupon'>
                            <input type="text" placeholder="Enter coupon code" className='coupon-input' />
                            <a href="#">
                                Apply Coupon
                            </a>
                        </div>
                    </div>
                    <div className='bilingDetails-container'>
                        <div className='bilingDetails-left'>
                            <h3 className='bilingDetails-h3'>Billing Details</h3>
                            <div className='biling-inputs-container'>
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <input type="text" className='long-input company-input' placeholder='Company Name' />
                            <div className='biling-inputs-container'>
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <select className='biling-select' >
                                <option value="">Country</option>
                                <option value="">Country</option>
                                <option value="">Country</option>
                            </select>
                            <input type="text" className='long-input' />
                            <input type="text" className='long-input' />
                            <input type="text" className='long-input' />
                            <select className='biling-select' >
                                <option value="">District</option>
                                <option value="">District</option>
                                <option value="">District</option>
                            </select>
                            <input type="text" className='long-input postCode-input' placeholder='Postcode/ZIP' />
                            <div className='createCheckBox-div'>
                                <input type="checkbox" id='createAcc' />
                                <label htmlFor="createAcc">Create an account?</label>
                            </div>
                            <div className='shippingDetails-div'>
                                <h3 className='shippingDetails-h3'>Shipping Details</h3>
                                <div className='createCheckBox-div'>
                                    <input type="checkbox" id='shippingAcc' />
                                    <label htmlFor="shippingAcc">Create an account?</label>
                                </div>
                                <textarea placeholder='Order Notes' className='shippingDetails-textArea'  ></textarea>
                            </div>
                        </div>

                        <div className='bilingDetails-rigth'>
                            <h2 className='bilingDetails-rigth-h2'>Your Order</h2>
                            <div className='total-product'>
                                <a href="#" className='total-product-a'>
                                    <h4 className='total-product-h4'>Product </h4>
                                </a>
                                <a href="#" className='total-product-a'>
                                    <h4 className='total-product-h4'>Total</h4>
                                </a>
                            </div>
                            <div className='vegetableName-container'>
                                <a href="3" className='vegetableName-a'>
                                    Fresh Blackberry
                                </a>
                                <a href="#" className='vegetable-count'>
                                    x-02
                                </a>
                                <a href="#" className='vegetable-price'>
                                    $720.00
                                </a>
                            </div>
                            <div className='vegetableName-container'>
                                <a href="3" className='vegetableName-a'>
                                    Fresh Tomatoes
                                </a>
                                <a href="#" className='vegetable-count'>
                                    x-02
                                </a>
                                <a href="#" className='vegetable-price'>
                                    $720.00
                                </a>
                            </div>
                            <div className='vegetableName-container'>
                                <a href="3" className='vegetableName-a'>
                                    Fresh Brocoli
                                </a>
                                <a href="#" className='vegetable-count'>
                                    x-02
                                </a>
                                <a href="#" className='vegetable-price'>
                                    $720.00
                                </a>
                            </div>
                            <div className='subTotal-div'>
                                <a href="#" className='subTotal-a'>Subtotal </a>
                                <a href="" className='subTotal-price'> $2160.00</a>
                            </div>
                            <div className='subTotal-div'>
                                <a href="#" className='subTotal-a'>Shipping  </a>
                                <a href="" className='subTotal-price'> Flat rate: $50.00</a>
                            </div>
                            <div className='total-price-div'>
                                <a href="" className='total-price-a'>
                                    Total
                                </a>
                                <a href="" className='total-price-second-a'> $2210.00</a>


                            </div>
                            <div className='checkPayments'>
                                <input type="checkbox" id='check' />
                                <label htmlFor="check" name='selector'>Check payments</label>
                            </div>
                            <p className='about-payPal'>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                Store Postcode.</p>
                            <div className='payPal-div'>
                                <div className='check-payPal'>
                                    <input type="checkbox" id='paypal' />
                                    <label htmlFor="paypal" name='selector' >Paypal</label>
                                </div>
                                <img src="	https://preview.colorlib.com/theme/aroma/img/product/card.jpg" alt="" />
                            </div>
                            <p className='about-payPal'>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            <div className='terms-conditions'>
                                <input type="checkbox" id='accept' />
                                <label htmlFor="accept">
                                    I’ve read and accept the
                                </label>
                                <a href="#">
                                    terms & conditions*
                                </a>
                            </div>
                            <a href="#" className='proceed-button'>
                                Proceed to Paypal
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
            <Footer></Footer>

        </div>
    )
}

export default Productcheckout