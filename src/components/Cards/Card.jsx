import Cart from '../Svg/Cart'
import Search from '../Svg/Search'
import Heart from '../Svg/Heart'

import './Card.scss'

const Card = ({ img, title, name, price, shopcat, cardWidth }) => {
    return (
        <div className={`card-container ${shopcat ? shopcat : ''} ${cardWidth ? cardWidth : ''} `}>
            <img src={img} />
            <div className='card-search-bar'>
                <div className='card-blueBackGround'>
                <Search  fillColor='white'></Search>
                </div>
                <div className='card-blueBackGround'>
                <Cart fillColor="white" />

                </div >
                <div className='card-blueBackGround'>
                    <Heart fillColor='white'></Heart>
                </div>

            </div>
            <div className='about-card'>
                <p className='card-title-p'>{title}</p>
                <h4 className='card-name-h4'>{name}</h4>
                <p className='card-price-p'>{price}</p>
            </div>
        </div>
    )
}

export default Card