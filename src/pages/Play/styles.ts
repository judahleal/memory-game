import styled from "styled-components";
import backgroundImage from "src/assets/images/background.png";

/* prettier-ignore */
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a4ffc9 url(${backgroundImage}) space center center / 55px;
    background-blend-mode: exclusion;
`;
