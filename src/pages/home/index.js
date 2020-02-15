import React, {Component } from 'react'
import {
    HomeWrapper,
    Header,
    Entrance,
    Footer
} from './style'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <Header>
                    <p className="font-container"> هيلث ›</p>
                </Header>      
                <Entrance>
                    <i className="iconfont icon-container">&#xe9d9;</i>
                    <Link to="/homepage">
                    <img className="img-container" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="主页"/>
                    </Link>
                    <Link to="/article">
                    <img className="img-container" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="文章"/>
                    </Link>
                    <Link to="/summary">
                    <img className="img-container" src="https://www.yangicheng.cn/static/image/cover.jpg" alt="" title="总结"/>
                    </Link>
                    <i className="iconfont icon-container">&#xe9da;</i>
                </Entrance>
                <Footer>
                    <div className="content-container">
                        <p className="content-font-"> عشق ، </p>
                    </div>
                </Footer>
            </HomeWrapper>
        )
    }
}

export default Home