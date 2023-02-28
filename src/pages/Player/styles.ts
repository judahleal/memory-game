import styled from "styled-components";
import backgroundImage from "src/assets/images/background.png";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #a4ffc9;
    background: #a4ffc9 url(${backgroundImage}) space center center / 55px;
    background-blend-mode: exclusion;

    div input {
        width: 300px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 18px;
        color: #777;
        background: #f2ffc8;
        font-weight: bold;

        &::placeholder {
            color: #777;
            font-size: 14px;
        }
        
        &:focus-within {
            outline: solid 2px #777;
        }
    }

    div.buttonContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }
`;
