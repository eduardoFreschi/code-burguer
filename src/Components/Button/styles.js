import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: ${(props) => props.bgColor};
    cursor: pointer;
    align-self: center;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #ffffff;
    margin-top: calc(76px - 15px);
    margin-bottom: 10px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    ${(props) =>
        props.marginTop &&
        `
    margin-top: 90px
    `}

    @media screen and (max-width: 400px) {
        width: auto;
        min-width: 280px;
    }
`;
