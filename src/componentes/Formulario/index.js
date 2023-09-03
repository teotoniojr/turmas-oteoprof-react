import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoEstudanteCadastrado({
            nome,
            numero,
            imagem,
            turma,
        })
        setNome('')
        setNumero('')
        setImagem('')
        setTurma('')
    }

    const[nome, setNome] = useState('')
    const[numero, setNumero] = useState('')
    const[imagem, setImagem] = useState('')
    const[turma, setTurma] = useState('')
           
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o seu card de estudante</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Número" 
                    placeholder="digite seu número da chamada"
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}  
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Turma" 
                    itens={props.turmas}
                    valor={turma}
                    aoAlterado={valor => setTurma(valor)}
                />
                <Botao>
                    Criar card
                </Botao> 
            </form>
        </section>
    )
}

export default Formulario