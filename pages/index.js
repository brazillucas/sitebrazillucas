import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Início</h1>
            <h2>Tela de contagem</h2>
            <Contador />
            <img src='https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg'></img>
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