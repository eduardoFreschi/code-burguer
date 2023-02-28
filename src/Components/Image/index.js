import React from "react";
import { Image as Img } from "./styles";

function Image({ children, isBag, ...rest }) {
    return <Img isBag={isBag} {...rest}></Img>;
}

export default Image;
