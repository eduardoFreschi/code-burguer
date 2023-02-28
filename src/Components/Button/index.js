import React from "react";
import { Button as Btn } from "./styles";

function Button({ children, bgColor, ...rest }) {
    return (
        <Btn {...rest} bgColor={bgColor}>
            {children}
        </Btn>
    );
}

export default Button;
