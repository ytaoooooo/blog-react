import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'



const getSummaryDataAction = (data)=>({
    type: actionType.GET_SUMMARY_DATA,
    data
})


export const getSummaryData = ()=>{
    return (dispatch)=>{
        axios.get('https://yangicheng.cn/node/api/v1/summary')
        .then((res)=>{
            const data = fromJS(res.data.data)
            dispatch(getSummaryDataAction(data))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}