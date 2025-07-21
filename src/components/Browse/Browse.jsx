import { useState, useEffect } from 'react';
import Browsecard from '../Browsecard/Browsecard'
import './Browse.scss'

const Browse = () => {
    const browseCardObj = [
        { img: 'https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png' },
    ];

    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width <= 568) {
                setCardsToShow(1);
            } else if (width <= 796) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        }
        handleResize(); // component mount olanda bir dəfə yoxla
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section>
            <div className="browse-div">
                <div className="first-browse-section">
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp" alt="" />
                </div>
                <div className="second-browse-section">
                    <div className='second-browse-div'>
                        <h4 className='second-browse-h4'>Shop is fun</h4>
                        <h1 className='second-browse-h1'>Browse Our<br />Premium Product</h1>
                        <p className='second-browse-p'>
                            Us which over of signs divide dominion deep fill bring they're meat beho<br />
                            upon own earth without morning over third. Their male dry. They are great <br />
                            appear whose land fly grass.
                        </p>
                        <button className='second-browse-button'>Browse Now</button>
                    </div>
                </div>
            </div>

            <div className='browseCard-page'>
                {browseCardObj.slice(0, cardsToShow).map((item, index) => (
                    <Browsecard key={index} img={item.img} />
                ))}
            </div>
        </section>
    );
};

export default Browse;
