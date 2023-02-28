import React, { useState, useEffect } from "react";
import { Container, Box, Paragraph, Div, ButtonIcon } from "./styles";
import ContainerItens from "../../Components/ContainersItens";
import Image from "../../Components/Image";
import Bag from "../../assets/bag.svg";
import Title from "../../Components/Title";
import Trash from "../../assets/trash.svg";
import Button from "../../Components/Button";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get(
                "http://localhost:3001/order"
            );

            setOrders(newOrders);
        }
        fetchOrders();
    }, []);

    const navigate = useNavigate();

    async function removeItem(id) {
        await axios.delete(`http://localhost:3001/order/${id}`);
        const newOrders = orders.filter((order) => order.id !== id);

        setOrders(newOrders);
    }

    function goBack() {
        navigate("/");
    }
    return (
        <Container>
            <ContainerItens isOrder={true}>
                <Image isBag={true} src={Bag}></Image>
                <Title>Pedidos</Title>

                <ul>
                    {orders.map((order) => (
                        <Box key={order.id}>
                            <Div>
                                <Paragraph>{order.order}</Paragraph>
                                <Paragraph isName={true}>
                                    {order.clientName}
                                </Paragraph>
                            </Div>

                            <ButtonIcon
                                onClick={() => {
                                    removeItem(order.id);
                                }}
                            >
                                <img src={Trash} alt="trash"></img>
                            </ButtonIcon>
                        </Box>
                    ))}
                </ul>

                <Button
                    marginTop={true}
                    onClick={goBack}
                    bgColor="rgba(255, 255, 255, 0.14)"
                >
                    Voltar
                </Button>
            </ContainerItens>
        </Container>
    );
}

export default Orders;
