import React, { Component } from 'react'
import {
    ArticleWrapper,
    ArticleContainer,
    ArticleHeader,
    ArticleContent,
    ArticleLeft,
    ArticleRight
} from './style'
import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Article extends Component {
    componentDidMount() {
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
        
        
    }
    render() {
        const { articleList } = this.props
        return (
            <ArticleWrapper>
                <Link to="/">
                    <i className="iconfont back">&#xe9da;</i>
                </Link>
                <ArticleContainer>
                    <ArticleHeader>
                        <div className="title"> مقالات </div>
                    </ArticleHeader>
                    <ArticleContent>
                        <ArticleLeft>
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
                                {articleList.toJS().map((item) => {
                                    return (
                                        <div className="article-item" key={item.id}>
                                            <img src={item.articleImg} alt="" className="article-img" />
                                            <div className="article-content">
                                                <Link to={"/article/articleDetail/" + item.id}>
                                                    <div className="article-title">{item.articleHeader}</div>
                                                </Link>
                                                <div className="article-summary">
                                                    <div className="label-container">
                                                        {item.articleLabel.map((label,index)=>{
                                                            return(
                                                                <div className="label" key={index}>{label}</div>
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
                        </ArticleLeft>
                        <ArticleRight>
                            <div>sideBar</div>
                        </ArticleRight>
                    </ArticleContent>
                </ArticleContainer>

            </ArticleWrapper>
        )
    }
   
    
}

const mapState = (state) => ({
    articleList: state.getIn(["article", "articleList"])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Article)