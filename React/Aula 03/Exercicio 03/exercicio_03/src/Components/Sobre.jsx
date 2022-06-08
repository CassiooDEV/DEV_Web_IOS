const estilo = { color: 'blue' };
const estilo2 = { backgroundColor: 'black', color: 'white' };

const Sobre = () => {
    return(
    <article>
        <h2 style={estilo}>Sobre React</h2>
        <p style={estilo2}>
            React é uma biblioteca JS utilizada para criação de interfaces de
            usuários.
        </p>
    </article>)
};

export default Sobre;
