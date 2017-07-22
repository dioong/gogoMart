import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MartListContainer from './MartListContainer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { onCreate, onRemove } = this.props;
        return (
            <div>
                <MartListContainer/>
            </div>
        )
    }
}


// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);