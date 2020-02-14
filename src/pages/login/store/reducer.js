// import {fromJS} from 'immutable'
import * as actionType from './actionType'

// const defaultState = fromJS({
//     topicList:[],
//     recommendList:[],
//     list:[],
//     showScroll: false,
//     page: 1
// })
const defaultState = {
    login: false
}

export default (state=defaultState, action)=>{
    switch (action.type) {
        // case actionType.GET_RECOMMEND_DATA:
        //     return state.set('recommendList',action.list)
        default:
            return state
    }
}