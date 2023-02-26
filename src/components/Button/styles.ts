import styled from "styled-components";

/* prettier-ignore */
type IButtonProps = {
    className: "default" | "cancel" | "confirm";
}

/* prettier-ignore */
export const Container = styled.button<IButtonProps>`
    border: none;
    border-radius: 10px;
    padding: 10px;
    transition: all 0.1s;
    box-shadow: 2px 3px 0 #000;
    flex: 1;
    max-width: 140px;

    &:active {
        box-shadow: none;
    }

    &:hover {
        filter: contrast(80%);
    }
    
    ${props => props.className === 'default' && `
        background: #C3C3C3;
        color: #212121;
    `}

    ${props => props.className === 'cancel' && `
        background: #c3c3c3;
        border: solid 2px #444;
        color: #212121;
    `}

    ${props => props.className === 'confirm' && `
        background: #444;
        color: #FFF;
    `}
`;
