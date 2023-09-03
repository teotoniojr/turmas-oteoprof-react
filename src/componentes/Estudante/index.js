import './Estudante.css'

const Estudante = ({nome, imagem, numero, corDeFundo}) => {
    return (
        <div className='estudante'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt='Foto de perfil do Teotonio' />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{numero}</h5>
            </div>
        </div>
    )
}
export default Estudante