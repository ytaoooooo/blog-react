import styled from 'styled-components'

export const ArticleDetailWrapper = styled.div `
    background:#F2EEDF;
    overflow: hidden;
    .back {
        position: fixed;
        font-size: 40px;
        top: 30px;
        left : 30px;
    }
`
export const ArticleDetailContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 12%;
`
export const ArticleDetailHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    .title{
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size:30px;
        font-weight: 400;
    }
`
export const ArticleDetailContent = styled.div `
    overflow:hidden;
    width:65%;
    margin: 0 auto;
    padding-bottom: 100px;
    background: #fff;
`
export const ArticleDetailContentHeader = styled.div `
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px 0 20px 0 ;
    line-height:44px;
    font-size: 34px;
    color:#333;
    font-weight: bold;
`
export const ArticleDetailContentArticle = styled.div `
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
    }
    p{
        margin: 10px 0;
        font-size: 16px;
        line-height: 32px;
    }
`   
