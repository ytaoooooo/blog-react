import React, {Component} from 'react'
import {
    HomepageWrapper,
    HomepageContainer,
    HomepageHeader,
    HomepageContent
}from './style'


class Homepage extends Component {
    render(){
        return(
            <HomepageWrapper>
                <HomepageContainer>
                    <HomepageHeader>
                        <div className="content-container">
                            <img className="avatar" src="https://www.yangicheng.cn/static/image/avatar.jpg" alt=""/>
                            <div className="font-container">
                                <p className="font-name">YooY</p>
                                <p className="font-introduction">Never say die.</p>
                            </div>
                        </div>
                        <div className="like-container">
                            <i className="iconfont like-icon">&#xea66;</i>
                            <p className="like-number">99</p>
                        </div>
                    </HomepageHeader>
                    <HomepageContent>
                        <div className="introduction">
                            <div className="introduction-title">About Me:</div>
                            <div className="introduction-container">
                                <div className="introduction-name">
                                    <div className="iconfont name-icon">&#xe9d9;</div>
                                    <div className="name">you can call me Towel</div>
                                </div>
                                <div className="introduction-hobby">
                                    <div className="iconfont hobby-icon">&#xe9d9;</div>
                                    <div className="hobby">code game movie music</div>
                                </div>
                                <div className="introduction-aboutWeb">
                                    <div className="iconfont web-icon">&#xe9d9;</div>
                                    <div className="web">xxxxxx</div>
                                </div>
                            </div>
                        </div>
                        <div className="works">
                            <div className="github-container">
                                <div className="github-title">My Github:</div>
                                <div className="github-content">
                                    <img src="https://www.yangicheng.cn/static/image/git.png" alt=""/>
                                </div>
                            </div>
                            <div className="music-container">
                                <div className="music-title">My music:</div>
                                <div className="music-content">
                                    <img src="https://www.yangicheng.cn/static/image/git.png" alt=""/>
                                </div>
                            </div>                        
                        </div>
                        <div className="recommend">
                            
                            <div className="recommend-course">
                                <div className="course-container">
                                    <img className="course-img"src="https://www.yangicheng.cn/static/image/7yue_python.jpg" alt=""/>
                                    <div className="comment">7yue python</div>
                                </div>
                                <div className="course-container">
                                    <img className="course-img"src="https://www.yangicheng.cn/static/image/7yue_python.jpg" alt=""/>
                                    <div className="comment">bobo AI</div>
                                </div>
                                <div className="course-container">
                                    <img className="course-img"src="https://www.yangicheng.cn/static/image/7yue_python.jpg" alt=""/>
                                    <div className="comment">shuangyue</div>
                                </div>
                                <div className="course-container">
                                    <img className="course-img"src="https://www.yangicheng.cn/static/image/7yue_python.jpg" alt=""/>
                                    <div className="comment">dell react</div>
                                </div>
                            </div>
                        </div>
                        
                    </HomepageContent>
                </HomepageContainer>

            </HomepageWrapper>
        )
    }
}

export default Homepage