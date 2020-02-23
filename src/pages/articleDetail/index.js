import React, { useEffect } from 'react'
// import axios from 'axios'
import {
    ArticleDetailContainer,
    Title,
    ArticleWrapper,
    Article,
    SideBar
} from './style'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function ArticleDetail(props) {
    useEffect(() => {
        props.getArticleDetailContent(props.match.params.id)
    },[])
    const contenta = `
    `
    

    return (
        <ArticleDetailContainer>
            <Title>غرب شارع</Title>
            <ArticleWrapper>
                <Article>
                    <header>{props.data.toJS().title}</header>
                    <content dangerouslySetInnerHTML={{ __html: props.data.toJS().content }}></content>
                    {/* <content dangerouslySetInnerHTML={{ __html: contenta }}></content> */}
                    <footer></footer>
                </Article>
                <SideBar>

                </SideBar>
            </ArticleWrapper>
        </ArticleDetailContainer>
    )
}


const mapState = (state) => ({
    data: state.getIn(['articleDetail','data'])
})

const mapDispatch = (dispatch) => ({
    getArticleDetailContent: (id)=>{
        dispatch(actionCreator.getArticleDetailContent(id))
    }
})

export default connect(mapState, mapDispatch)(ArticleDetail)