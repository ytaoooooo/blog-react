import styled from 'styled-components'


export const HomeWrapper = styled.div`
    position:fixed;
    top:0;
    bottom:45%;
    left:0;
    right:0;
    z-index:1;
    background: #F2EEDF;
`

export const Header = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height:100%;
    width:100%;
    .font-container{
        font-family: "Lohit Devanagari", "ITF Devanagari";
        font-size:30px;
        font-weight: 400;
    }
`
export const Entrance = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    position:relative;
    width:100%;
    top: -20%;
    .icon-container{
        font-size: 30px;
        color: #eedeb0;
    }

    .img-container{
        width:200px;
        height:200px;
        clip-path: circle(50% at 50% 50%);
        margin: 0 20px;
        
    }
`
export const Footer = styled.div `
    position: fixed;
    bottom: 0;
    left:0;
    right:0 ;
    .content-container{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height:70px;
        .content-font{
            
            font-family: "Lohit Devanagari", "ITF Devanagari";
            font-size:20px;
            font-weight: 300;
        }
    }
`