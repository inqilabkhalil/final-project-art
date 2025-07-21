import './Contact.scss'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import Home from '../../components/Svg/Home'
import Headphones from '../../components/Svg/Headphones'
import Letter from '../../components/Svg/Letter'
const Contact = () => {
    return (
        <div className='main-contact-container'>
            <Header></Header>
            <Category headText={'Shop Category'} headP={'- Shop Category'}></Category>
            <div className='contact-container'>
                <div className='mistake-container'>
                    <img src="	https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" />
                    <p className='mistake-container-p'>Hata! Bir sorun oluştu.</p>
                    <p className='mistake-container-map'>Bu sayfa Google Haritalar'ı düzgün şekilde yükleyemedi. Teknik ayrıntılar için JavaScript konsoluna bakın.</p>
                </div>
                <div className='second-contact-section'>
                    <div className='above-div-contact'>
                        <div className='place-contact'>
                            <div className='home-contact-section'>
                                <Home />
                                <div className='place-contact-text'>
                                    <h3>California United States</h3>
                                    <p>Santa monica bullevard</p>
                                </div>
                            </div>
                            <div className='home-contact-section'>
                                <Headphones />
                                <div className='place-contact-text'>
                                    <h3>00 (440) 9865 562</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className='home-contact-section'>
                                <Letter></Letter>
                                <div className='place-contact-text'>
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className='row-div'>
                        <div className='inputs-aboutYou'>
                            <input type="text" placeholder='Enter your name' />
                            <input type="text" placeholder='Enter email address' />
                            <input type="text" placeholder='Enter ubject' />
                        </div>
                        <textarea name="" id="" className='contact-textArea' placeholder='Enter Message'></textarea>
                        </div>

                    </div>
                    <div className='down-div-contact'>
                        <button className='send-message-button'>Send Message</button>
                    </div>


                </div>
            </div>


        </div>

    )
}

export default Contact