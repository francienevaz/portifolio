import './App.css';
import Myname from './Components/Myname';
import Menu from './Components/Menu';

const App = () => {
  return (
    <div>
      <header>
        <h1>
          <Myname/>
        </h1>
          <Menu/>
      </header>

      <main>
        <Image/>
        <Resume/>
        <Projects/>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>    
  );
}

export default App;
