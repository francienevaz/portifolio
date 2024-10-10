import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import '../Styles/Projects.css'

const Projects = () => {
    return(
        <>
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                    <div className="card">
                        <div className='card-wrapper'>
                            <h2>Projeto I</h2>
                            <p>Site</p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card">
                        <div className='card-wrapper'>
                            <h2>Projeto II</h2>
                            <p>CRUD</p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card">
                        <div className='card-wrapper'>
                            <h2>Projeto III</h2>
                            <p>API</p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="card">
                        <div className='card-wrapper'>
                            <h2>Projeto IV</h2>
                            <p>E-commerce</p>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
        
    )
}

export default Projects;