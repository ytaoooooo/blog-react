import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'


const getSummaryDetailAction = (data)=>({
    type: actionType.GET_SUMMARY_DETAIL_CONTENT,
    data
})


export const getSummaryDetailContent = (id) => {
    return (dispatch) => {
        axios.get(`https://yangicheng.cn/node/api/v1/summary/detail/?id=${id}`)
            .then((res) => {
                let data = fromJS(res.data.data)
                dispatch(getSummaryDetailAction(data))
            })
            .catch((err)=>{
                console.log(err)
            })

    }
}
