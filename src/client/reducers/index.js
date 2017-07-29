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
    ]),
    year : 2017,
    month : 7,
    date : 17
})

// 리듀서 함수를 정의합니다.
const martReducer = (state = initialState, action) => {
    const marts = state.get('marts');
    const year = state.get('year');
    const month = state.get('month');


    switch(action.type) {
        case actionTypes.CHANGE_MONTH:
            let changedMonth = month +action.change;
            let changedYear = year;
            if(changedMonth < 0){
                changedMonth = 12;
                changedYear = year-1;
            }else if(changedMonth > 12){
                changedMonth = 1;
                changedYear = year+1;
            }
            state = state.set('year',changedYear);
            state = state.set('month',changedMonth);
        case actionTypes.SELECT_DATE:
            state = state.set('date',action.date);
        default:
            return state;
    }
};

export default martReducer;