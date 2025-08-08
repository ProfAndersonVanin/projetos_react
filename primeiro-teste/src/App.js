import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';

function App() {

  
  return (
    <div className="App">
      <h1>MEU APP REACT</h1>
      <Frase />
      <HelloWorld />
      <Frase />
      <DigaMeuNome nome="FULANO" />
      <p>Outro paragrafo</p>
    </div>
  );
}

export default App;
