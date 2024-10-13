import './App.css';
import Nav from './Components/Nav';
import Image from './Components/Image';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Nav/>
    <div className="main">
      <Resume/>
      <Image/>  
    </div>         
      <Projects/> 
      <footer>
        <Footer/>
      </footer>
      
    </div>    
  );
}

export default App;
