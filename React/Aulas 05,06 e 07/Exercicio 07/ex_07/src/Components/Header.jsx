import PropTypes from 'prop-types';
import Button from './Button';
import TasksOpen from './TasksOpen';

const Header = ({ title }) => {
    const onClick = () => { 
       let newTask = prompt('Insira o compromisso')
        };
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text="Add" onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;