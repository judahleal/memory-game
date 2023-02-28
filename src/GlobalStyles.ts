import { createGlobalStyle } from "styled-components";
import FontTajawal from "./assets/fonts/Tajawal-regular.ttf";
import FontTajawalBold from "./assets/fonts/Tajawal-regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Tajawal';
        src: url(${FontTajawal}),
             url(${FontTajawalBold});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: 'Tajawal';
    }

    html {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }

    button:disabled,
    input:disabled,
    textarea:disabled {
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
    }

    a,
    button {
        cursor: pointer;
    }

    a,
    button,
    input,
    textarea,
    select,
    div {
        -webkit-tap-highlight-color: transparent;
    }

    .block {
        pointer-events: none;
    }
`;
