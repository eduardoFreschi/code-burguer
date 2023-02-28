import styled from "styled-components";

export const Image = styled.img`
    width: 342px;
    height: 354px;
    align-self: center;
    margin-top: 11px;

    ${(props) =>
        props.isBag &&
        `
    width: 246px;
    `}

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;
