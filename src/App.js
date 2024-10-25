import logo from './logo.svg';
import './App.css';
import Saludo from './Saludos.js';
import Despedida from './Despedida.js';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <Saludo/>
        <Despedida/>
      </header>
    </div>
  );
}

export default App;
