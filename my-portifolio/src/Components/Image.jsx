import img from '../Images/hermione.jpg';
import '../Styles/Image.css'

const Image = () => {
    return(
        <div className='img'>
            <img src={img} alt="profile" />
        </div>        
    )
}

export default Image;