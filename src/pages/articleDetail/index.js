import React, { Component } from 'react'
import {
    ArticleDetailWrapper,
    ArticleDetailContainer,
    ArticleDetailHeader,
    ArticleDetailContent,
    ArticleDetailContentHeader,
    ArticleDetailContentArticle
} from './style'
import { Link } from 'react-router-dom'


class ArticleDetail extends Component {
    render() {
        return (
            <ArticleDetailWrapper>
                <Link to="/article">
                    <i className="iconfont back">&#xe9da;</i>
                </Link>
                <ArticleDetailContainer>
                    <ArticleDetailHeader>
                        <div className="title">غرب شارع</div>
                    </ArticleDetailHeader>
                    <ArticleDetailContent>
                        <ArticleDetailContentHeader>
                            XXXXXXXXXXXXXXXXXXXXXXX
                        </ArticleDetailContentHeader>
                        <ArticleDetailContentArticle>
                            <img src="https://www.yangicheng.cn/static/image/cover.jpg" alt=""/>
                            <p>现在社会发展的速度越来越快，人们的生活节奏也越来越快，以前人们喜欢茶余饭后谈天说地，午后小憩，三五人聚在一起品茗下棋。。。</p>
                            <p>生活水平越来越好，但这些离我们的现实生活却越来越远，我们每个人都有自己的事情忙碌，每天都渴望变化，追逐新鲜事物，但真正静下心来思考人生的时间越来越少。</p>
                            <p>在某一个瞬间，我又开始思念无忧无虑的年少时光，但一切却已经消失在时间的长河中。</p>
                        </ArticleDetailContentArticle>                        
                    </ArticleDetailContent>
                </ArticleDetailContainer>
            </ArticleDetailWrapper>
        )
    }
}

export default ArticleDetail