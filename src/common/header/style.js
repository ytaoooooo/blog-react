import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    z-index:1;
    display: fixed;
    position: relative;
    top: 0;
    height: 59px;
    border-bottom: 1px solid #F2EEDF;
`
export const HeaderContainer = styled.div`
    display: flex;
    width:100%;
    height:100%;
    justify-content: space-between;
    background: #F2EEDF;
    .iconfont-container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        .icon{
            font-size:50px;
            color: black;
        }
    }
    }
    .font-container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .font-item{
            font-family: "Lohit Devanagari", "ITF Devanagari";
            font-size:20px;
            font-weight: 400;
            
        }
    }

    .login-container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        .login{
            font-size:30px;
            color: black;
        }
    }
`

