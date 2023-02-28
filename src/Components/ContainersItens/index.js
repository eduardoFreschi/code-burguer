import React from "react";
import { ContainerItens as Container } from "./styles";

function ContainerItens({ children, isOrder }) {
    return <Container isOrder={isOrder}>{children}</Container>;
}

export default ContainerItens;
