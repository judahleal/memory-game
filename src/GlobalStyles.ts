import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
