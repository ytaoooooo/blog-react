import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'

const initArticleListAction = (articleList)=>({
    type: actionType.GET_ARTICLE_LIST,
    articleList
})

export const getArticleList = () => {
    return (dispatch)=>{
        axios.get('https://www.yangicheng.cn/node/api/article')
            .then((res)=> {
                const articleList = fromJS(res.data.data.articleList)
                dispatch(initArticleListAction(articleList))
            })
            .catch((err)=> {
                console.log(err)
            })
    }
}
