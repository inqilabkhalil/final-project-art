import './Browsecard.scss'

const Browsecard = ( {img} ) => {
    return (
        <div className='browseCard-container'>
            <div className='browseCard-img-div'>
                <img src={img} alt="" />
            </div>
            <div className='aboutBrowe-card'>
                <a href='#' className='headPhone-a'>
                    <h3 className='headPhone-h3'>
                        Wireless Headphone
                    </h3>
                    <p className='item-p'>Accesories item</p>
                </a>
            </div>
        </div>
    )
}

export default Browsecard

