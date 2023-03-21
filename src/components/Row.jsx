import React from "react";


export default function Row(props){

        return(
                <tr>
                        <td className="deadline">{props.Deadline}</td>
                        <td className="task">{props.Task}</td>
                        <td> <button id = "delete" onClick = {props.toggleRow}>✓</button></td>
                </tr>
        )
}