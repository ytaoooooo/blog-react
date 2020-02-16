import {fromJS} from 'immutable'
import * as actionType from './actionType'

const defaultState = fromJS({
    sideBarItemSelect: 0,
    sideBarList :[
        {
            name: "React",
            number: 10,
            id: 1
        },
        {
            name: "Node",
            number: 9,
            id: 2
        },
        {
            name: "Vue",
            number: 8,
            id: 3
        },
        {
            name: "Js",
            number: 7,
            id: 4
        },
        {
            name: "Css",
            number: 10000,
            id: 5
        }
    ],
    summaryItem:[
        {
            headerImg: "https://yangicheng.cn/static/image/blog-summary/react.png",
            headerName: "React",
            headerSummary: "React is an open source JavaScript library used for designing user interfaces.",
        },
        {
            headerImg: "https://yangicheng.cn/static/image/blog-summary/node.png",
            headerName: "Node",
            headerSummary: "Node.js is a tool for executing JavaScript in a variety of environments.",
        },
        {
            headerImg: "https://yangicheng.cn/static/image/blog-summary/vue.png",
            headerName: "Vue",
            headerSummary: "Vue.js is a JavaScript framework for building interactive web applications.",
        },
        {
            headerImg: "https://yangicheng.cn/static/image/blog-summary/javascript.png",
            headerName: "javascript",
            headerSummary: "JavaScript (JS) is a lightweight interpreted programming language with first-class functions",
        },
        {
            headerImg: "https://yangicheng.cn/static/image/blog-summary/css.png",
            headerName: "Css",
            headerSummary: "Cascading Style Sheets (CSS) is a language used most often to style and improve upon the appearance of views.",
        },
    ],
    
    summaryItemContent:[
        [
            {
                contentName:"React",
                contentSummary: "???",
                contentOther:"???",
                id:0
            },
            {
                contentName:"React",
                contentSummary: "???",
                contentOther:"???",
                id:1
            },
            {
                contentName:"React",
                contentSummary: "???",
                contentOther:"???",
                id:2
            },
            {
                contentName:"React",
                contentSummary: "???",
                contentOther:"???",
                id:3
            }
        ],
        [
            {
                contentName:"Node",
                contentSummary: "???",
                contentOther:"???",
                id:0
            },
            {
                contentName:"Node",
                contentSummary: "???",
                contentOther:"???",
                id:1
            },
            {
                contentName:"Node",
                contentSummary: "???",
                contentOther:"???",
                id:2
            },
            {
                contentName:"Node",
                contentSummary: "???",
                contentOther:"???",
                id:3
            }


        ],
        [
            {
                contentName:"Vue",
                contentSummary: "???",
                contentOther:"???",
                id:0
            },
            {
                contentName:"Vue",
                contentSummary: "???",
                contentOther:"???",
                id:1
            },
            {
                contentName:"Vue",
                contentSummary: "???",
                contentOther:"???",
                id:2
            }
            ,{
                contentName:"Vue",
                contentSummary: "???",
                contentOther:"???",
                id:3
            }

        ],
        [
            {
                contentName:"javascript",
                contentSummary: "???",
                contentOther:"???",
                id:0
            },
            {
                contentName:"javascript",
                contentSummary: "???",
                contentOther:"???",
                id:1
            },
            {
                contentName:"javascript",
                contentSummary: "???",
                contentOther:"???",
                id:2
            },
            {
                contentName:"javascript",
                contentSummary: "???",
                contentOther:"???",
                id:3
            },
            
            
        ],
        [
            {
                contentName:"css",
                contentSummary: "???",
                contentOther:"???",
                id:0
            },
            {
                contentName:"css",
                contentSummary: "???",
                contentOther:"???",
                id:1
            },
            {
                contentName:"css",
                contentSummary: "???",
                contentOther:"???",
                id:2
            },
            {
                contentName:"css",
                contentSummary: "???",
                contentOther:"???",
                id:3
            }
            
        ],
    ]
})


export default (state=defaultState, action)=>{
    switch (action.type) {
        // case actionType.GET_RECOMMEND_DATA:
        //     return state.set('recommendList',action.list)
        case actionType.SET_SIDEBAR_ITEM_SELECT:
            return state.set('sideBarItemSelect',action.index)
        default:
            return state
    }
}