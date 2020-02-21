import React, { useEffect } from 'react'
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
// import { connect } from 'react-redux'

function Article() {
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
    })
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
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                        <div className="article-item">
                            <img src="https://yangicheng.cn/static/image/blog-summary/javascript.png" alt="" className="article-img" />
                            <div className="article-content">
                                <div className="article-title">关于网站，关于博客</div>
                                <div className="article-summary">
                                    <div className="label-container">
                                        <div className="label">闲谈</div>
                                        <div className="label">心路历程</div>
                                    </div>
                                    <div className="date">2.21</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <SideBar>this is sideBar</SideBar>
            </ContentContainer>

        </ArticleContainer>

    )
}

// class Article extends Component {
// componentDidMount() {
//     new Swiper('.swiper-container', {
//         loop: true, // 循环模式选项
//         // autoplay: true,
//         pagination: {
//             el: '.swiper-pagination',
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });


// }
// render() {
//     const { articleList } = this.props
//     return (
//         <ArticleWrapper>
//             <Link to="/">
//                 <i className="iconfont back">&#xe9da;</i>
//             </Link>
//             <ArticleContainer>
//                 <ArticleHeader>
//                     <div className="title"> مقالات </div>
//                 </ArticleHeader>
//                 <ArticleContentContainer>
//                     <ArticleLeft>
//                         <div className="swiper-container">
//                             <div className="swiper-wrapper">
//                                 <div className="swiper-slide">
//                                     <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
//                                 </div>
//                                 <div className="swiper-slide">
//                                     <img className="swiper-img" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" />
//                                 </div>
//                             </div>
//                             <div className="swiper-pagination"></div>
//                             <div className="swiper-button-prev"></div>
//                             <div className="swiper-button-next"></div>
//                         </div>

//                         <div className="article-container">
//                             {articleList.toJS().map((item) => {
//                                 return (
//                                     <div className="article-item" key={item.id}>
//                                         <img src={item.articleImg} alt="" className="article-img" />
//                                         <div className="article-contentContainer">
//                                             <Link to={"/article/articleDetail/" + item.id}>
//                                                 <div className="article-title">{item.articleHeader}</div>
//                                             </Link>
//                                             <div className="article-summary">
//                                                 <div className="label-container">
//                                                     {item.articleLabel.map((label, index) => {
//                                                         return (
//                                                             <div className="label" key={index}>{label}</div>
//                                                         )
//                                                     })}
//                                                 </div>

//                                                 <div className="date">{item.articleDate}</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </ArticleLeft>
//                     <ArticleRight>
//                         <div>sideBar</div>
//                     </ArticleRight>
//                 </ArticleContentContainer>
//             </ArticleContainer>

//         </ArticleWrapper>
//     )
// }


// }

// const mapState = (state) => ({
// articleList: state.getIn(["article", "articleList"])
// })

// const mapDispatch = (dispatch) => ({

// })

// export default connect(mapState, mapDispatch)(Article)
export default Article;