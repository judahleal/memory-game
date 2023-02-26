import styled from "styled-components";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #777;

    div input {
        width: 300px;
        border: solid 2px #c3c3c3;
        border-radius: 5px;
        padding: 10px;
    }

    div.buttonContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
`;
