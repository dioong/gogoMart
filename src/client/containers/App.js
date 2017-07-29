import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MartListContainer from './MartListContainer';
import CalendarContainer from './CalendarContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { onCreate, onRemove } = this.props;
        return (
            <div>
                <MartListContainer/>
                <CalendarContainer/>
            </div>
        )
    }
}


/**
 * 액션함수 준비
 * 동작이 추가되면 액션 생성자를 하나 추가하고 그 액션 생성자로 넘길 인수를 정의한다.
 * 액션 생성자에 대한 정의 interface를 설계하는 것이 필요
 */
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);