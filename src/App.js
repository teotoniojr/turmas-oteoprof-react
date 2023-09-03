import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Turma from './componentes/Turma';

function App() {
  
  const turmas = [
    {
      nome: '8ºA Pensamento Computacional',
      corPrimaria:'#0b5394',
      corSecundaria:'#cfe2f3'
    },
    {
      nome: '8ºB Pensamento Computacional',
      corPrimaria:'#00ffff',
      corSecundaria:'#d0e0e3'
    },
    {
      nome: '8ºC Pensamento Computacional',
      corPrimaria:'#ffff00',
      corSecundaria:'#fff2cc'
    },
    {
      nome: '8ºD Pensamento Computacional',
      corPrimaria:'#660000',
      corSecundaria:'#f4cccc'
    },
    {
      nome: '8ºE Pensamento Computacional',
      corPrimaria:'#00ff00',
      corSecundaria:'#d9ead3'
    },
    {
      nome: '8ºF Pensamento Computacional',
      corPrimaria:'#ff9900',
      corSecundaria:'#fce5cd'
    },
    {
      nome: '8ºG Pensamento Computacional',
      corPrimaria:'#666666',
      corSecundaria:'#efefef'
    },
    {
      nome: '9ºA Pensamento Computacional',
      corPrimaria:'#000000',
      corSecundaria:'#666666'
    },
    {
      nome: '9ºB Pensamento Computacional',
      corPrimaria:'#351c75',
      corSecundaria:'#d9d2e9'
    },
    {
      nome: '9ºC Pensamento Computacional',
      corPrimaria:'#980000',
      corSecundaria:'#e6b8af'
    },
    {
      nome: '9ºD Pensamento Computacional',
      corPrimaria:'#4a86e8',
      corSecundaria:'#c9daf8'
    },
    {
      nome: '9ºE Pensamento Computacional',
      corPrimaria:'#a64d79',
      corSecundaria:'#ead1dc'
    },
    {
      nome: '1ºA Pensamento Computacional',
      corPrimaria:'#ffffff',
      corSecundaria:'#434343'
    },
    {
      nome: '1ºB Pensamento Computacional',
      corPrimaria:'#ff00ff',
      corSecundaria:'#ead1dc'
    },
    {
      nome: '2ºA Programação - Matemática II',
      corPrimaria:'#0000ff',
      corSecundaria:'#dadaf6'
    }

  ]

  const [estudantes, setEstudantes] = useState([])

  const aoNovoEstudanteAdicionado = (estudante) => {
    console.log(estudante)
    setEstudantes([...estudantes, estudante])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario turmas={turmas.map(turma => turma.nome)} aoEstudanteCadastrado={estudante => aoNovoEstudanteAdicionado(estudante)} />
      {turmas.map(turma => <Turma
        key={turma.nome}
        nome={turma.nome}
        corPrimaria={turma.corPrimaria}
        corSecundaria={turma.corSecundaria}
        estudantes={estudantes.filter(estudante => estudante.turma === turma.nome)}
      />)}
    </div>
  );
}

export default App;
