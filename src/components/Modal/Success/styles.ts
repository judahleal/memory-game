import styled from "styled-components";

/* prettier-ignore */
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    padding: 20px;
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
        color: #edea30;
        text-shadow: 2px 2px 0 #c1854d;
    }

    img {
        width: 220px;
    }

    div.content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        padding: 50px 10px;
        background: #36c45b;
        border-radius: 7px;
        box-shadow: 5px 5px 0 #338447;

        .buttonContainer {
            margin-top: 30px;
            display: flex;
            justify-content: center;
        }
    }
`;
