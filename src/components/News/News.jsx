import Newscard from "./Newscard"
import './News.scss'


const News = () => {
  const newsCardData = [
    {
      img: 'https://preview.colorlib.com/theme/aroma/img/blog/blog1.png',
      name: 'The Richland Center Shooping News and weekly shooper',
    },
    {
      img: 'https://preview.colorlib.com/theme/aroma/img/blog/blog2.png',
      name: 'The Shopping News also offers top-quality printing services',
    },
    {
      img: 'https://preview.colorlib.com/theme/aroma/img/blog/blog3.png',
      name: 'Professional design staff and efficient equipment you’ll find we offer',
    },
  ];

  return (
    <div className="news-container">
      <div className="news-container-header">
        <p className="news-p">Popular Item in the market</p>
        <h2 className="news-h2">Latest<span className="news-span">
          News</span> </h2>
      </div>
      <div className="newsCard-container">
        {
          newsCardData.map((item, index) => {
            return (
              <Newscard img={item.img} name={item.name} key={index} ></Newscard>
            )
          })
        }

      </div>
      
    </div>
  )
}

export default News