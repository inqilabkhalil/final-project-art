import React from 'react'
import Card from '../Cards/Card'
import product1 from '../../images/product1.jpeg'
import './Product.scss'


const Product = () => {
    const products = [
        {
            id: 1,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product1.png',
            title: 'Quartz Belt Watch',
            name: 'Accessories',
            price: '$150.00'
        },
        {
            id: 2,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product2.png',
            title: 'Women Freshwash',
            name: 'Beauty',
            price: '$150.00'
        },
        {
            id: 3,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product3.png',
            title: 'Room Flash Light',
            name: 'Decor',
            price: '$150.00'
        },
        {
            id: 4,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product4.png',
            title: 'Room Flash Light',
            name: 'Decor',
            price: '$150.00'
        },
        {
            id: 5,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product5.png',
            title: 'Man Office Bag',
            name: 'Accessories',
            price: '$150.00'
        },
        {
            id: 6,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product6.png',
            title: 'Charging Car',
            name: 'Kids Toy',
            price: '$150.00'
        },
        {
            id: 7,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product7.png',
            title: 'Blutotth Speaker',
            name: 'Accessories',
            price: '$150.00'
        },
        {
            id: 8,
            img: 'https://preview.colorlib.com/theme/aroma/img/product/product8.png',
            title: 'Charging Car',
            name: 'Kids Toy',
            price: '$150.00'
        }
    ];
    return (
        <div className='product-container'>
            <section className='first-product-section'>
                <div>
                    <p className='product-p'>
                        Popular Item in the market
                    </p>
                    <h2 className='product-h2'>Trending <span className='product-span'>Product</span></h2>
                </div>
            </section>
            <section className='second-product-section'>
                <div className='card-list'>
                    {products.map((item,index) => {

                        return (
                            <Card img={item.img}
                                title={item.title}
                                name={item.name}
                                price={item.price}
                                key={index}
                        ></Card>
                        )
                    })

                    }
                </div>



            </section>

        </div>
    )
}

export default Product