import './Tabela.css';

const Tabela = (props) => {
    return (
        <>
            <div >
                {
                    props.Transacoes.map((transacao, index) => (
                        <div className='tabela' key={index}>
                            <div className='dado'>{transacao.codigo}</div>
                            <div className='dado'>{transacao.descricao}</div>
                            <div className='dado'>{transacao.entrada}</div>
                            <div className='dado'>{transacao.saida}</div>
                            <div className='dado'>{transacao.total}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tabela;