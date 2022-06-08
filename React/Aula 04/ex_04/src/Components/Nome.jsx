import { Component } from 'react';

const nome = {color:'blue', borderBottom:'2px solid black', textAlign :'center',padding:'10px'}
class Nome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Heloisa',
        };
    }

    render() {
        return (
            <div>
                <h2 style={nome}>Aluno(a) - {this.state.nome} </h2>
            </div>
        );
    }
}

export default Nome;