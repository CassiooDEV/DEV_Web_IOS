import PropTypes from 'prop-types';

const BoasVindas = (props) => {
    return (
        <section>
            <h1 style={{ color: 'green' }}>Boas Vindas {props.name}!</h1>
            <p style={{ color: 'white', backgroundColor: 'black' }}>
                Ainda assim, existem dúvidas a respeito de como a estrutura
                atual da organização obstaculiza a apreciação da importância dos
                conhecimentos estratégicos para atingir a excelência.
            </p>
        </section>
    );
};
BoasVindas.defaultProps = {
    nome: 'NAME',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};
export default BoasVindas;
