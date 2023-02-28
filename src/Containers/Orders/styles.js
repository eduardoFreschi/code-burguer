import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("${Bg}");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Box = styled.div`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 27px;
    padding-right: 15px;
    margin-top: 18px;

    @media screen and (max-width: 400px) {
        width: auto;
        min-width: 280px;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: ${(props) => (props.isName ? "700" : "300")};
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
`;

export const ButtonIcon = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;
