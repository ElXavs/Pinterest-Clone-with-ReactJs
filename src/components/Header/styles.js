import styled from 'styled-components';

const Nav = styled.nav`
    background-color: white;
    width: 100vh;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 4px 16px;
    & ul{
        display: flex;
        height: 100%;
        height: 58px;
        & li{
        color: black;
        border-radius: 20px;
        height: 48px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 20px 15px;
        box-sizing: border-box;
        font-weight: bold;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        }
        & input{
            min-width: 407px;
            background-color: #EFEFEF;
            border: none;
            padding: 15px 10px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            &:active{
                border: none;
            }
        }
    }
`;

export default Nav;
