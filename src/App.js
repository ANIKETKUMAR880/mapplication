import logo from './logo.svg';
import './App.css';
import './style.css';
import Head from './components/Head';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
