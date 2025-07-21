import React from 'react';
import Card from '../Cards/Card';
import './Bestseller.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Bestseller = () => {
    const bestSellerObj = [
        {
            category: "Beauty",
            name: "Women Freshwash",
            price: '150.00$',
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product2.png'
        },
        {
            category: "Decor",
            name: "Room Flash Light",
            price: '150.00$',
            img: "https://preview.colorlib.com/theme/aroma/img/product/product3.png"
        },
        {
            category: "Decor",
            name: "Room Flash Light",
            price: '150.00$',
            img: "https://preview.colorlib.com/theme/aroma/img/product/product4.png"
        },
        {
            category: "Accessories",
            name: "Quartz Belt Watch",
            price: '150.00$',
            img: "https://preview.colorlib.com/theme/aroma/img/product/product1.png"
        }
    ];

    return (
        <div className="bestSeller-container">
            <div className='bestSeller-texts'>
                <p className="bestSeller-p">Popular Item in the market</p>
                <h2 className="bestSeller-h2">
                    Best <span className="bestSeller-span">Sellers</span>
                </h2>
            </div>
            <div className="bestSeller-cards">
                <Swiper
                    spaceBetween={30}
                    navigation={true}
                    pagination={false}
                    modules={[Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        568: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 } // <-- 4 kart görünəcək
                    }}
                >
                    {bestSellerObj.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                img={item.img}
                                title={item.category}
                                name={item.name}
                                price={item.price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Bestseller;
