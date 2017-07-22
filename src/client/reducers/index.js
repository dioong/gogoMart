import { Map, List } from 'immutable';
import * as actionTypes from '../actions/ActionTypes';
// 초기 상태를 정의합니다.

const initialState = Map({
    marts: List([
        {
            name : '롯데마트 풍덕천점'
        },
        {
            name : '이마트 죽전점'

        },
        {
            name : '이마트 트레이더스 보정점'
        }
    ])
})

// 리듀서 함수를 정의합니다.
const martReducer = (state = initialState, action) => {
    const marts = state.get('marts');
    console.log("action",action);
    switch(action.type) {
        case actionTypes.INCREMENT:
            return state.set('marts', marts.push({
                name : "test"
            }));
        case actionTypes.DECREMENT:
            return state.set('marts', marts.splice(action.index, 1));
        default:
            return state;
    }
};

export default martReducer;