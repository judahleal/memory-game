import styled from "styled-components";

/* prettier-ignore */
type ICardProps = {
    isSelected: boolean;
}

/* prettier-ignore */
export const CardContainer = styled.button<ICardProps>`
    height: 80px;
    width: 65px;
    padding: 5px;
    /* border: solid 1px #000; */
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #3effa1;
    transition: all 0.5s;
    
    ${props => props.isSelected && 'animation: showCard 0.5s;'}
    ${props => !props.isSelected && 'animation: hideCard 0.5s;'}

    ${props => props.isSelected && 'background: #FFF;'}

    @keyframes showCard {
        0% {
            transform: rotateY(-180deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }

    @keyframes hideCard {
        0% {
            transform: rotateY(-180deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }

    &:not(:disabled):hover {
        transform: scale(1.1);
        box-shadow: 2px 10px 10px rgba(35, 35, 35, 0.3);
    }

    &:disabled {
        filter: contrast(80%);
        background: #ffffa1;
    }

    img {
        display: flex;
        justify-content: center;
        max-width: 100%;
        animation: showImage 0.5s;

        @keyframes showImage {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;
