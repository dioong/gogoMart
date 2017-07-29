import * as actions from '../actions';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    year: state.get('year'),
    month: state.get('month'),
    date: state.get('date')
});

/*
 액션 생성자를 사용하여 액션을 생성하고,
 해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
 */
const mapDispatchToProps = (dispatch) => ({
    changeMonth: (change) => dispatch(actions.changeMonth(change)),
    selectDate : (date) => dispatch(actions.selectDate(date)),
})

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;