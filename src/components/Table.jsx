import Row from "./Row";
import { nanoid } from 'nanoid';

export default function Table({data, handleRemoveItem}){

        // Toggle row when user clicks done button
        const toggleRow = (event) =>{
                const val = event.target.parentNode.parentNode;
                const deadline = val.querySelector(".deadline").textContent;
                const task = val.querySelector(".task").textContent;
                handleRemoveItem(deadline, task);
                
                
        }          

        const rows = data.map((item) => {
                const key = nanoid()
                return (
                        <Row 
                        toggleRow = {toggleRow}
                        key = {key}
                        {...item}/> 
                )
        })

        return(
                <div>
                        <table id = "table">
                                <thead>
                                        <tr>  
                                        <th id = "Deadline">Deadline</th>
                                        <th id = "Task">Tasks</th>
                                        <th id = "Done">Done ✓</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {rows}
                                </tbody>
                        </table>          
                        

                </div>
        )
}