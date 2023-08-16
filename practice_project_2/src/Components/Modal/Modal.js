import React from "react";
import Button from "../Button/Button";



const Modal = ({ setError }) => {
    const clickHandler = () => {
        setError('')
    }

    return (
        <div>
            모달
            {/* <button type='button' onClick={clickHandler}></button> */}
            <Button type={'button'} onClick={clickHandler}>Quit</Button>
        </div>
    )
}

export default Modal