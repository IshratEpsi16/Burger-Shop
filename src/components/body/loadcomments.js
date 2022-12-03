import React from 'react'
import dateFormat from "dateformat";
let LoadComments = (props) => {
    return (
        props.comment_para.map(item => {
            return (
                <div key={item.id}>

                    <h6>{item.author}</h6>
                    <p>Rating : {item.rating}/10</p>
                    <p>{item.comment}</p>
                    <p>{dateFormat(item.date, "dS mmmm, yyyy, h:MM TT")}</p>
                </div>
            );
        })



    );
}
export default LoadComments;