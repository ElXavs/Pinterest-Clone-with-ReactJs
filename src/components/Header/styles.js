import styled from 'styled-components';

const Nav = styled.nav`
    background-color: white;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    & ul{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-around;
        align-items: center;
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
            &.Nav__input{
                width: inherit;
            }
            & div{
                min-width: 407px;
                width: 100%;
                background-color: #EFEFEF;
                border: none;
                display: flex;
                align-items: center;
                border-radius: 25px;
                font-size: 14px;
                font-weight: 500;
            }
            & svg{
                margin-left: 15px;
            }
        }
        & input{
            padding: 15px 10px;
            background-color: #EFEFEF;
            border: none;
            height: 100%;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            &:active{
                border: none;
            }
        }
    }
`;

export default Nav;
