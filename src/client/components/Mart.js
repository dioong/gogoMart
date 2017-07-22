import React from 'react';
import PropTypes from 'prop-types';

const Mart = ({name, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <li
            className="Mart"
            onClick={() => onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement(index);
                }
            }
            onDoubleClick={() => onSetColor(index)}>
            {name}
        </li>
    );
};

Mart.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Mart.defaultProps = {
    index: 0,
    name: '',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Mart;