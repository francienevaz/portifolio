import './App.css';
import Myname from './Components/Myname';
import Menu from './Components/Menu';
import Image from './Components/Image';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
          <Myname/>        
          <Menu/>
      </header>

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
