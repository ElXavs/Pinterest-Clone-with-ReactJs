import styled from 'styled-components';

import fadeIn from '../../assets/styles/animation';

const Image = styled.div`
    border-radius: 10px;
    margin-bottom: 20px;
    width: 250px;
    border-radius: 50px;
    background: #f4f4f5;
    transition-duration: 1s;
    transition-timing-function: ease;
    & img{
        ${fadeIn({ time: '2s' })}
        height: 100%;
        border-radius: 50px;
    }
`;

export default Image;
