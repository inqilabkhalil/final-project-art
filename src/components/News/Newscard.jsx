import './Newscard.scss'

const Newscard = ({ img, name }) => {
    return (
        <div className='newscard-container'>
            <img src={img} className='card-img' />
            <div className='newscard-about'>
                <p className='newscard-admin-p'>By Admin</p>
                <div className='newscard-comment'>
                    <img src="" alt="" />
                    <p className='comment-p'>2 Comments</p>
                </div>
              
              
            </div>
            <p className='newscard-name'>{name}</p>
                <p className='newscard-title' >
                Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.
                </p>
               <a href="" className='newscard-a'>
                Read More
               </a>

        </div>
    )
}

export default Newscard