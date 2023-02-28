import styled from "styled-components";
import backgroundImage from "src/assets/images/background.png";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    div.logo {
        height: calc(100vh - 200px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #a4ffc9 url(${backgroundImage}) space center center / 55px;
        background-blend-mode: exclusion;
    }

    div.buttonContainer {
        align-self: flex-end;
        background: #121E26;
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
