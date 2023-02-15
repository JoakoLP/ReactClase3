import { useState } from 'react';
import Counter from './components/Contador';
import Section from './components/Section';
import Lista from './components/Lista';
import RelojEffect from './components/RelojEffect';
import './App.css';

function App() {

  const [estado, setEstado] = useState('Estado Inicial');
  // 'Estado Inicial' será estado inicial de {estado}

  return (
    <div className="App">
      <Section>{estado}</Section>
      <button onClick={()=> setEstado('Estado Modificado')}> Cambiar Estado </button>
      <Counter/>
      <Lista/>
      <RelojEffect/>

    </div>
  );
}

export default App;
