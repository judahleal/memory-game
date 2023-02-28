import styled from "styled-components";

/* prettier-ignore */
type IContainerProps = {
    done: boolean;
}

/* prettier-ignore */
export const Container = styled.div<IContainerProps>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 15px;
    /* border: solid 1px #000; */
    border-radius: 15px;
    background-color: #14765c;

    ${props => props.done && 'filter: blur(3px);'}
`;
