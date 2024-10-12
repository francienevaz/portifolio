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
      <main className='main'>
        <Resume/>
        <Image/>
        <Projects/>        
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>    
  );
}

export default App;
