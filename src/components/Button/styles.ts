import styled from "styled-components";

/* prettier-ignore */
type IButtonProps = {
    className: "default" | "cancel" | "confirm";
}

/* prettier-ignore */
export const Container = styled.button<IButtonProps>`
    border: none;
    border-radius: 10px;
    padding: 15px;
    transition: all 0.2s;
    flex: 1;
    max-width: 140px;
    font-size: 18px;
    box-shadow: 5px 5px 0 #ae8033;
    font-weight: bold;

    &:active {
        box-shadow: none;
    }

    &:hover {
        filter: brightness(110%);
    }
    
    ${props => props.className === 'default' && `
        background: #ffd005;
        color: #121E26;
    `}

    ${props => props.className === 'cancel' && `
        background: #F29D35;
        color: #121E26;
    `}

    ${props => props.className === 'confirm' && `
        background: #F2C53D;
        color: #121E26;
    `}
`;
