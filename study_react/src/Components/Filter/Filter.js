import React, { useState } from "react";

function Filter(props) {

    const selectHandler = (e) => {
        props.onFilterChange(e.target.value)
    }

    return (
        <>
            <h3>선택한 연도: {props.year}</h3>

            <select onChange={selectHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </>
    )
}

export default Filter