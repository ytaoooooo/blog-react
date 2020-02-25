import {fromJS} from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    data:{}
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        case actionType.GET_SUMMARY_DETAIL_CONTENT:
            return state.set('data',action.data)
        default:
            return state
    }
}