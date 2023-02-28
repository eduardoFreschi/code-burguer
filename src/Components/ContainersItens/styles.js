import styled from "styled-components";

export const ContainerItens = styled.div`
    width: 414px;
    height: 100%;
    min-height: 100vh;
    background: #0a0a10f9;
    display: flex;
    flex-direction: column;
    gap: 25px 0;
    margin: 10px 0;

    ${(props) =>
        props.isOrder &&
        `
        align-items: center;
    `}
`;
