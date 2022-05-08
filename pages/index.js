import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Início</h1>
            
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador} - contagem</div>
            <button onClick={adicionarContador}>Adicionar</button>

        </div>
    )
}

export default Home