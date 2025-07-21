import './Category.scss'

const Category = ({ headText, headP }) => {
    return (
        <div className='category-div'>
            <div className='category-texts-div'>
                <h1 className='category-h1'>
                    {headText}
                </h1>
                <div className='home-category'>
                    <a href='#'>Home</a>
                    <p className='home-category-p'>{headP}</p>

                </div>


            </div>
        </div>
    )
}

export default Category