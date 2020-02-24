import { fromJS } from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    data: {
        sideBarList: [
            {
                id: 0,
                name: "",
                number: 0,
                headerImg: "",
                headerName: "",
                headerSummary: "",
            },
        ],
        summaryItem: [
            {
                id: 0,
                type: 0,
                name: "",
                summary: ""
            }
        ]
    }
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.GET_SUMMARY_DATA:
            return state.set('data', action.data)
        default:
            return state
    }
}