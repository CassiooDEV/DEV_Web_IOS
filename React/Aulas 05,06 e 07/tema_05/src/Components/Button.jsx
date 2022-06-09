import PropTypes from 'prop-types';

const Button = ({text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="btn"
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    bgColor: 'steelblue',
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
