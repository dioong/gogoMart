import MartList from '../components/MartList';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    marts: state.get('marts')
});

/*
 액션 생성자를 사용하여 액션을 생성하고,
 해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
 */
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = "red";
        dispatch(actions.setColor({ index, color}));
    }
})

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const MartListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MartList);

export default MartListContainer;