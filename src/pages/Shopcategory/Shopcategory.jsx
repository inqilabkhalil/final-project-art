import './Shopcategory.scss'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import SearchIcon from '../../components/Svg/Search'
import Card from '../../components/Cards/Card'
import Topproduct from '../../components/Topproduct/Topproduct'
import Topproductpage from '../../components/Topproduct/Topproductpage'
import Footer from '../../components/Footer/Footer'
import Newsupdate from '../../components/News/Newsupdate'

const Shopcategory = () => {
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
      price: '$150.00',

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
    },  
    {
      id: 1,
      img: 'https://preview.colorlib.com/theme/aroma/img/product/product1.png',
      title: 'Quartz Belt Watch',
      name: 'Accessories',
      price: '$150.00'
    },]
  return (
    <div className='shopCategory-div'>
      <Header></Header>
      <Category headText={'Shop Category'} headP={'- Shop Category'}></Category>
      <div className='main-category-div'>
        <section className='items-section'>
          <div className='first-seconds-item'>
            <h3 className='browseCategories-h3'>Browse Categories</h3>
            <div className='li-list-div'>
              <nav>
                <ul>
                  <li className='item-li'>
                    <input type="radio" id="men" name="brand" />
                    <label htmlFor="men">Men (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="women" name="brand" />
                    <label htmlFor="women">Women (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="accessories" name="brand" />
                    <label htmlFor="accessories">Accessories (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="footwear" name="brand" />
                    <label htmlFor="footwear">Footwear (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="bay-item" name="brand" />
                    <label htmlFor="bay-item">Bay item (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="electronics" name="brand" />
                    <label htmlFor="electronics">Electronics (3600)</label>
                  </li>
                  <li className='item-li'>
                    <input type="radio" id="food" name="brand" />
                    <label htmlFor="food">Food (3600)</label>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='second-items-div'>
            <h3 className='browseCategories-h3'>Product Filters</h3>
            <div className='li-list-div second-list-div'>
              <p className='brands-p'>Brands</p>
              <ul>
                <li className="item-li">
                  <input type="radio" id="apple" name="brand" />
                  <label htmlFor="apple">
                    <span>Apple (29)</span>
                  </label>
                </li>
                <li className="item-li">
                  <input type="radio" id="asus" name="brand" />
                  <label htmlFor="asus">
                    <span>Asus (29)</span>
                  </label>
                </li>
                <li className="item-li">
                  <input type="radio" id="gionee" name="brand" />
                  <label htmlFor="gionee">
                    <span>Gionee (19)</span>
                  </label>
                </li>
                <li className="item-li">
                  <input type="radio" id="micromax" name="brand" />
                  <label htmlFor="micromax">
                    <span>Micromax (19)</span>
                  </label>
                </li>
                <li className="item-li">
                  <input type="radio" id="samsung" name="brand" />
                  <label htmlFor="samsung">
                    <span>Samsung (19)</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className='second-items-div'>
            <p className='brands-p'></p>
            <div className='li-list-div'>
              <ul>
                <li className='item-li'>
                  <input type="radio" id='black' name='brand' />
                  <label htmlFor='black'>Black (29)</label>
                </li>
                <li className='item-li'>
                  <input type="radio" id='black-leather' name='brand' />
                  <label htmlFor='black-leather'>Black Leather (29)</label>
                </li>
                <li className='item-li'>
                  <input type="radio" id='black-with-red' name='brand' />
                  <label htmlFor='black-with-red'>Black with red (19)</label>
                </li>
                <li className='item-li'>
                  <input type="radio" id='gold' name='brand' />
                  <label htmlFor='gold'>Gold (19)</label>
                </li>
                <li className='item-li'>
                  <input type="radio" id='spacegrey' name='brand' />
                  <label htmlFor='spacegrey'>Spacegrey (19)</label>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='sorting-container'>
          <div className='sorting-div'>
            <div class='left-section'>
              <select>
                <option>Default sorting</option>
                <option>Populyarlığa görə sırala</option>
                <option>Qiymətə görə: aşağıdan yuxarıya</option>
                  <option>Qiymətə görə: yuxarıdan aşağıya</option>
                </select>
              <select>
                <option value="">12 göstər</option>
                <option value="">24 göstər</option>
                <option value="">36 göstər</option>
              </select>
            </div>
            <div className='search-section'>
              <input type="text" placeholder='Search' />
            </div>
          </div>
          <div className='shop-card-div'>
            {products.map((item, index) => {

              return (
                <Card img={item.img}
                  title={item.title}
                  name={item.name}
                  price={item.price}
                  key={index}
                  shopcat={'card-shop-category'}
                  cardWidth="card-margin-right" 
                ></Card>
              )
            })

            }
          </div>
        </section>
      </div>
    <div className='shop-category-topCard'>
      <Topproductpage></Topproductpage>
    </div> 
    <Newsupdate></Newsupdate>
    <Footer></Footer>
    </div>
  )
}

export default Shopcategory
