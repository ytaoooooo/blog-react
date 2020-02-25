import styled from 'styled-components'

export const SummaryDetailContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    min-height: 100%;
    background: #F2EEDF;
    font-family:"PingFang SC","微软雅黑","Microsoft YaHei",Helvetica,"Helvetica Neue",Tahoma,Arial,sans-serif;
    @media only screen and (max-width: 30rem ){
        background: #fff;
    }
    .back {
        position: fixed;
        font-size: 40px;
        top: 30px;
        left : 30px;
        @media only screen and (max-width:30rem){
            display: none
        }
    }
`

export const Title = styled.div `
    display:flex;
    flex-direction :row;
    justify-content:center;
    align-items:center;
    height: 10rem;
    width:100%;
    font-family: "Lohit Devanagari", "ITF Devanagari";
    font-size:30px;
    font-weight: 400;
    @media only screen and (max-width: 30rem ){
        display:none
    }
`


export const SummaryWrapper = styled.div`
    display:flex;
    flex-direction: row;
    width: 70%;
    @media only screen and (max-width: 30rem ){
        width: 100%;
    }
`

export const Summary = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.05);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 4rem 4rem 2.4rem 4rem;
    @media only screen and (max-width: 30rem ){
        width:100%;
        box-shadow: none;
        border-radius: none;

    }

    header{
        display:flex;
        flex-direction: row;
        justify-content: center;
        line-height: 1.5;
        margin: 2rem 0 1rem 0 ;
        font-size: 3.4rem;
        color:#333;
        font-weight: blod;
        @media only screen and (max-width: 30rem ){
            font-size: 3rem;
            margin: 1rem 0 1rem 0;
        }
    }
    h1{
        line-height: 1.5;
        font-size: 2.5rem;
        margin: .5rem 0rem 1rem 0rem;
        color: #08c;
        @media only screen and (max-width: 30rem ){
            font-size: 2rem;
        }
    }
    img{
        width: 100%;
    }
    p{
        margin: 1rem 0;
        font-size: 1.6rem;
        line-height: 2;
        text-indent: 4rem;
        text-align: justify;
        @media only screen and (max-width: 30rem ){
            font-size: 1.4rem;
            text-indent: 2rem;
            text-align: justify
        }
    }
`

export const SideBar = styled.section`
    display:flex;
    flex-direction: column;
    width: 30%;
    @media only screen and (max-width: 30rem ){
        display:none
    }
    
`