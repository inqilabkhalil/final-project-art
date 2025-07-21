import './Topproduct.scss'

const Topproduct = ({img}) => {
  return (
    <div className='topProduct-container'>
        <img src={img} alt="" />
        <div className='topProduct-texts'>
            <a href="#" className='topProduct-a'>Gray Coffee Cup</a>
            <p className='topProduct-p'>170.00$</p>
        </div>
    </div>
  )
}

export default Topproduct