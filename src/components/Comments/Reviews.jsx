import Star from '../Svg/Star'
import './Reviews.scss'

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <div className='reviews-body'>
                <div className='reviews-left-div'>
                    <div className='overall-div'>
                        <div className='overall-point'>
                            <h5>Overall</h5>
                            <h4>4.0</h4>
                            <h6>(03 Reviews)</h6>

                        </div>
                        <div className='overall-star'>
                            <h3 className='overall-h3'> Based on 3 Reviews</h3>
                            <div className='count-star'>
                                <a href='#'>
                                    5 Star
                                </a>
                                <div>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                </div>
                                <p>01</p>
                            </div>
                            <div className='count-star'>
                                <a href='#'>
                                    5 Star
                                </a>
                                <div >
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>

                                </div>
                                <p>01</p>
                            </div>
                            <div className='count-star'>
                                <a href='#'>
                                    3 Star
                                </a>
                                <div>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>

                                </div>
                                <p>01</p>
                            </div>
                            <div className='count-star'>
                                <a href='#'>
                                    2 Star
                                </a>
                                <div>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>

                                </div>
                                <p>01</p>
                            </div>
                            <div className='count-star'>
                                <a href='#'>
                                    1 Star
                                </a>
                                <div>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>
                                    <Star></Star>

                                </div>
                                <p>01</p>
                            </div>


                        </div>

                    </div>
                    <div className='left-comments-div'>
                        <div className='comments-item'>
                            <div className='review-item'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/review-1.png" alt="" />
                                <div className='review-comment'>
                                    <h4 className='review-h4'>Blake Ruiz</h4>
                                    <div className='stars-div'>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                    </div>

                                </div>
                            </div>
                            <p className='comments-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        </div>
                        <div className='comments-item'>
                            <div className='review-item'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/review-2.png" alt="" />
                                <div className='review-comment'>
                                    <h4 className='review-h4'>Blake Ruiz</h4>
                                    <div className='stars-div'>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                    </div>

                                </div>
                            </div>
                            <p className='comments-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                        <div className='comments-item'>
                            <div className='review-item'>
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/review-3.png" alt="" />
                                <div className='review-comment'>
                                    <h4 className='review-h4'>Blake Ruiz</h4>
                                    <div className='stars-div'>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                    </div>

                                </div>
                            </div>
                            <p className='comments-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>

                    </div>

                </div>
                <div className='reviews-rigth-div'>
                    <h4 className='reviews-rigth-h4'>Add a Review</h4>
                    <div className='myRating-div'>
                        <p className='myRating-p'>Your Rating</p>
                        <div className='myRating-stars'>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                            <Star></Star>
                        </div>
                        <p className='myRating-outStanding'>Outstanding</p>
                    </div>
                    <form className='reviwes-form'>
                        <input type="text" placeholder='Enter your name' />
                        <input type="text" placeholder='Enter email address' />
                        <input type="text" placeholder='Enter subject' />
                        <textarea placeholder='Enter Mesagge' rows={4}></textarea>
                    </form>
                    <div className='submit-div'>
                        <button>Submit Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews