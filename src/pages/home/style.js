import styled from 'styled-components'

export const DesktopContainer = styled.div `
    display:flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    user-select: none;
    @media only screen and (max-width:30rem){
        display: none;
    }
`
export const DesktopHeader = styled.div `
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:55%;
    width:100%;
    min-height: 30rem;
    background: #F2EEDF;
    .headerTitle{
        position: relative;
        bottom: 14%;
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size:4.5rem;
        font-weight: 400;
    }
`
export const DesktopEntrance = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width: 100%;
    height:45%;
    a{
        margin: 0 calc(100%/30);
        width:calc(100%/5.2);
        position: relative;
        top: -40%;
        @media only screen and (min-width: 30.0125rem) and (max-width: 50rem){
            width: calc(100%/4);
            margin: 0 calc(100%/30);
        }
    }
    img{
        box-sizing: border-box;
        width: 100%;
        clip-path: circle(50% at 50% 50%);
        
        
    }
    .icon-container{
        font-size: 4rem;
        color: #eedeb0;
        position: relative;
        top: -40%;
        @media only screen and (min-width: 30.0125rem) and (max-width: 50rem){
            display:none;
        }
    }
`

export const MobileContainer = styled.div `
    display: none;
    @media only screen and (max-width: 30rem){
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width:100%;
        background-color: #F2EEDF;
    }
`
export const MobileHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    height: 20%;
    width: 100%;
    .headerTitle{
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size:4rem;
        font-weight: 400;
    }
`
export const MobileEntrance = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:100%;
    height: 66%;
    a{
        width:100%;
        padding: 0. .2rem;
        height:27%;  
    }
    .entrance{
        margin: 0 auto;
        width: 99%;
        height:100%;
        border-radius: 1rem;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .entrance-homepage{
        background-image: url(https://www.yangicheng.cn/static/image/vue.jpg);
    }
    .entrance-article{
        background-image: url(https://www.yangicheng.cn/static/image/vue.jpg);
    }
    .entrance-summary{
        background-image: url(https://www.yangicheng.cn/static/image/vue.jpg);
    }
`

