import { useEffect } from "react"

const Relatorio = () => {
    // Executa antes de componentizar
    useEffect(() => {
        localStorage.getItem('lista' || []);
    },[]);
    return (
        <>
            <h1>Total de Entradas: </h1>
            <h1>Total de Saídas: </h1>
            <h1>Saldo Atual: </h1>     
        </>
    )
}

export default Relatorio