import React from "react";

const Button = ({ type, children, onClick }) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}

export default Button