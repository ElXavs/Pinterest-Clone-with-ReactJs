import styled from 'styled-components';

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 0 10px;
    grid-auto-rows: 10px;
    justify-content: center;
    grid-auto-flow: row;
    & img{
        width: 250px;
    }
`;

export default ImageGrid;
