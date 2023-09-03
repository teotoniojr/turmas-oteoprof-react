import Estudante from '../Estudante'
import './Turma.css'

const Turma = (props) => {
    return(
        props.estudantes.length > 0 && <section className='turma' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='estudantes'>
            {props.estudantes.map( estudante => <Estudante 
                nome={estudante.nome}
                key={estudante.nome}
                corDeFundo={props.corPrimaria}
                numero={estudante.numero}
                imagem={estudante.imagem}
                turma={estudante.turma}
            />)}
            </div>
        </section>
    )

}

export default Turma