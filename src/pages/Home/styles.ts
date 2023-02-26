import styled from "styled-components";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    div {
        align-self: flex-end;
        background: #444;
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        button {
            margin-top: 40px;
        }
    }
`;
