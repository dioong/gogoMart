import React from 'react';
import Mart from './Mart';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const MartList = ({marts, onIncrement, onDecrement, onSetColor}) => {
    const martList = marts.map(
        (mart, i) => (
            <Mart
                key={i}
                index={i}
                name={mart.name}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <ul className="martList">
            {martList}
        </ul>
    );
};

MartList.propTypes = {
    marts: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

MartList.defaultProps = {
    marts: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default MartList;
