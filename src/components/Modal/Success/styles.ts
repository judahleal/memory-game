import styled from "styled-components";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1;
    animation: showModal 1s;

    @keyframes showModal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    h4 {
        font-size: 36px;
        /* text-transform: uppercase; */
        color: #212121;
        /* text-shadow: 2px 2px 0 #C3C3C3; */
        background: #FFF;
    }

    div.buttonContainer {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
`;
