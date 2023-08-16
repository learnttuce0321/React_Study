import React from "react";
import Card from "../Card/Card";

const List = ({ userList }) => {
    return (
        <Card className='list'>
            {
                userList.map((item, index) => {
                    return (
                        <h3 key={index}>{item.userName} ( {item.userAge} years old )</h3>
                    )
                })
            }
        </Card>
    )
}

export default List