import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from './Modal.module.css'

const Modal = ({ error, setError }) => {
    const clickHandler = () => {
        setError('')
    }

    return (
        <div className={classes.modalBackground}>
            <Card className={classes.modal}>
                <h2 className={classes.modalTitle}>An Error Occured</h2>
                <div className={classes.content}>
                    <h3>{error}</h3>
                </div>
                <div className={classes.action}>
                    <Button type={'button'} onClick={clickHandler}>Quit</Button>
                </div>
            </Card>
        </div>
    )
}

export default Modal