import logo from './logo.svg';
import './App.css';
//--
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      
      {/* <nav className='navbar_nabvar-dark_bg-dark'>
        
        <a className='text-white'>Task
        
        </a>
        <img src={logo} className="App-logo" alt="logo" />
          
      </nav> */}
      <Navigation/>
      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React↗
        </a>
      </header>
      <div className='App2'>
        <h3 className='title h3'>What is Lorem Ipsum?</h3>
        <p className='text center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>

  );
}

export default App;
