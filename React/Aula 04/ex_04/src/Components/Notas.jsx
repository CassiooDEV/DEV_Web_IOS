import { Component } from 'react';
const container = {border:'black solid 1px', borderTop:'0'}
const notas = [9, 7, 6, 5];
class Nota extends Component {
    render() {
        return (
            <div style={container}>
                <ul type="none">
                    <h2 style={{textDecoration: 'underline'}}>Notas bimestrais:</h2>
                    <li><strong>Ciências</strong> - {notas[0]}</li>
                    <li><strong>Matemática</strong> - {notas[1]}</li>
                    <li><strong>Fisíca </strong>- {notas[2]}</li>
                    <li><strong>Química </strong>- {notas[3]}</li>
                    <h4>
                       <strong style={{color:'blue'}}> Média</strong> - {(notas[0] + notas[1] + notas[2] + notas[3]) / 4}
                    </h4>
                </ul>
            </div>
        );
    }
}

export default Nota;
