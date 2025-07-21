import './Topproductpage.scss'
import Topproduct from './Topproduct'
import Newsupdate from '../News/Newsupdate';

const Topproductpage = () => {
    const firstTopProduct = [
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-1.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-2.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-3.png' }
    ];

    const secondTopProduct = [
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-4.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-5.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-6.png' }
    ];

    const thirdTopProduct = [
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-7.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-8.png' },
        { img: 'https://preview.colorlib.com/theme/aroma/img/product/product-sm-9.png' }
    ];



    return (
        <div className='topProductPage-container'>
            <div className='topProductPage-texts'>
                <p className='topProductPage-p'>Popular Item in the market</p>
                <h2 className='topProductPage-h2'>Top <span className='topProductPage-span'> Product</span></h2>
            </div>
            <div className='topProductPage-cards'>
                <div className='topProduct-item'>
                    {firstTopProduct.map((item, index) => (
                        <Topproduct img={item.img} key={`first-${index}`} />
                    ))}
                </div>

                <div className='topProduct-item'>
                    {secondTopProduct.map((item, index) => (
                        <Topproduct img={item.img} key={`second-${index}`} />
                    ))}
                </div>

                <div className='topProduct-item'>
                    {thirdTopProduct.map((item, index) => (
                        <Topproduct img={item.img} key={`third-${index}`} />
                    ))}
                </div>

                <div className='topProduct-item'>
                    {firstTopProduct.map((item, index) => (
                        <Topproduct img={item.img} key={`fourth-${index}`} />
                    ))}
                </div>
            </div>
           
        </div>
    )
}

export default Topproductpage