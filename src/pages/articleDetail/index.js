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
    
    const content = `
    `
    useEffect(() => {
        props.getArticleDetailContent(props.match.params.id)
    },[])
    const contenta = `<h1>什么是https</h1><p>https是HTTP+SSL/TLS，也就是在原有的http协议的基础上加上了为了保证传输安全性的协议，所以https并不是一个新的协议</p><h1>为什么要使用https</h1><p>在以前的http协议中，大致存在着三个问题：1、数据明文传输 2、报文完整性无法验证 3、无法验证通信双方的身份</p><h1>对称加密算法</h1><p>对称加密算法是客户端和服务端共用一个密钥</p><p>优点：加密解密效率高、缺点：密钥无法实现安全传输、密钥数目难以管理、无法提供信息完整性校验</p>
    <h1>非对称加密算法</h1>
    <p>加密具有双向性,密钥分为公钥(公开)和私钥(自己保有)。公钥加密、私钥解密用于加密通信。私钥加密、公钥解密用于数字签名</p>
    <p>优点：服务器仅维持一个私钥即可，缺点：加密解密会耗费一定时间</p>
    <h1>数据明文传输解决方法</h1>
    <p>混合使用对称加密算法和非对称加密算法</p>
    <p>连接建立阶段使用非对称加密算法(沟通对称加密算法使用的密钥)，内容传输阶段使用对称加密算法</p>
    <img src="https://www.yangicheng.cn/static/image/article-detail/https.png" alt=""/>
    <h1>报文完整性如何验证</h1>
    <p>客户端或服务端向对方发送消息的时候，不仅会发送原消息，而且会将原消息通过hash算法生成信息摘要，并使用私钥进行加密生成数字签名。对方获得消息后，将消息通过hash算法获得信息摘要，并通过公钥解密私钥加密后的数字签名，得到信息摘要，通过对比两个信息摘要可以验证信息的完整性</p>
    <img src="https://www.yangicheng.cn/static/image/article-detail/digital-signature.jpg" alt=""/>
    <h1>身份信息如何验证</h1>
    <p>通过可信任机构颁发的数字证书，数字证书包含了相关信息可以进行身份的验证</p>
    `
    

    return (
        <ArticleDetailContainer>
            <Title>غرب شارع</Title>
            <ArticleWrapper>
                <Article>
                    <header>浅谈https</header>
                    <content dangerouslySetInnerHTML={{ __html: props.content }}></content>
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
    content: state.getIn(['articleDetail','content'])
})

const mapDispatch = (dispatch) => ({
    getArticleDetailContent: (id)=>{
        dispatch(actionCreator.getArticleDetailContent(id))
    }
})

export default connect(mapState, mapDispatch)(ArticleDetail)