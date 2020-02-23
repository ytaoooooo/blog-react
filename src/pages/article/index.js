import React, { useEffect } from 'react'
import { actionCreator } from './store'
import { Link } from 'react-router-dom'
import {
    ArticleContainer,
    Header,
    ContentContainer,
    Content,
    SideBar

} from './style'


import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Article(props) {
    const {getArticleList} = props
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        getArticleList();
    },[getArticleList])
    
    return (
        <ArticleContainer>
            <Header>
                <div className="title"> مقالات </div>
            </Header>
            <ContentContainer>
                <Content>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="article-container">
                        {props.articleList.toJS().map((item) => {
                            return (
                                <div className="article-item" key={item.id}>
                                    <img src={item.articleImg} alt="" className="article-img" />
                                    <div className="article-content">
                                        <Link to={'/article/articleDetail/' + item.id}>
                                            <div className="article-title">{item.articleTitle}</div>
                                        </Link>
                                        <div className="article-summary">
                                            <div className="label-container">
                                                {item.articleLabel.map((item, index) => {
                                                    return (
                                                        <div className="label" key={index}>{item}</div>
                                                    )
                                                })}

                                            </div>
                                            <div className="date">{item.articleDate}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Content>
                <SideBar>this is sideBar</SideBar>
            </ContentContainer>

        </ArticleContainer>

    )
}



const mapState = (state) => ({
    articleList: state.getIn(["article", "articleList"])
})

const mapDispatch = (dispatch) => ({
    getArticleList: () => {
        dispatch(actionCreator.getArticleList(dispatch))
    }
})


export default connect(mapState, mapDispatch)(Article);