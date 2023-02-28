import React, { useRef } from "react";
import { Container } from "./styles";
import ContainerItens from "../../Components/ContainersItens";
import Title from "../../Components/Title";
import { InputLabel, Input } from "./styles";
import CodeBurguer from "../../assets/code-burguer.svg";
import Button from "../../Components/Button";
import Image from "../../Components/Image";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Home() {
    const orderInput = useRef();
    const nameInput = useRef();

    const navigate = useNavigate();
    console.log(navigate);

    async function addOrder() {
        await axios.post("http://localhost:3001/order", {
            order: orderInput.current.value,
            clientName: nameInput.current.value,
        });

        navigate("/orders");
    }

    return (
        <Container>
            <ContainerItens>
                <Image src={CodeBurguer} />
                <Title>Faça seu pedido!</Title>

                <InputLabel>Pedido</InputLabel>
                <Input
                    ref={orderInput}
                    placeholder="1 Cola-Cola, 1-X Salada"
                ></Input>

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={nameInput} placeholder="Steve Jobs"></Input>

                <Button onClick={addOrder} bgColor="#D93856;">
                    Cadastrar
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Home;
