import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("${Bg}");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const InputLabel = styled.label`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #eeeeee;
    margin-left: 56px;
    margin-bottom: -24px;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    padding-left: 15px;
    align-self: center;
    margin-bottom: 42px;

    @media screen and (max-width: 400px) {
        width: auto;
        min-width: 280px;
    }
`;
