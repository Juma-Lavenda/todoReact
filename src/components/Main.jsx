import React, {useState}  from "react";
import Table from "./Table";
import NewTask from "./NewTask";

export default function Main(){
        const content = document.querySelector(".congrats");

        const [data, setData] = useState([{Deadline: "Add Deadline here", Task:"Add Task here"}]);
        /**
         * Sort the table by deadline of Task
         * @param {*} bool - A parameter that indicates if to sort by task or name
         */

        const sortTable =  (bool) => {
                const sortedData = data
                .slice(1)
                .sort((a, b) => bool? (a.Task.localeCompare(b.Task)):  
                (a.Deadline.localeCompare(b.Deadline)));
                setData([...data.slice(0, 1), ...sortedData]);
                
        }

        /**
         * Filter the table according to user deadline input
         * Modifies data so currently losing prev user input
         */
        const filterTable = () =>{
                const value = document.querySelector(".filter").querySelector('input').value
                {value && setData(data.filter(a => a.Deadline === value.toString()));}
        }

        /**
         * Add a new task to the table
         * @param {} newItem - task to be added
         */
        const handleAddItem = (newItem) => {
                setData([...data, newItem]);
        };

        /**
         * Remove task from table
         * @param {*} deadline - the deadline for the task
         * @param {*} task - the task to be removed
         */

        const handleRemoveItem = (deadline, task) => {
                setData(data.filter((item) => 
                (item.Deadline != deadline && item.Task != task)));
        };

        // Somehow the server breaks when it tries to access my congrats message

        if(data.length === 1){
                // content.style.display = 'block'
         }

        
         /**
          * Toggle form to add task when add task button is clicked
          */
        function addTaskHandler(){
                const item = document.querySelector(".tasknew")
                item.style.display = 'block'
                // content.style.display = 'none'

        }
        return (
                <div>
                        <div className = "addtask">
                                <h3>Add Task</h3>
                                <button id = "task" onClick = {addTaskHandler}>+</button>
                        </div>
        
                        <div className = "display">
                                <h3> Sort tasks by: </h3>
                                <button className = "sort">None</button>
                                <button className = "sort" onClick={() => sortTable(true)}>Name</button>
                                <button className = "sort"onClick={() => sortTable(false)} >Deadline</button>
                        </div>
                        <div className = "filter">
                                <h3> Filter deadline:</h3>
                                <input id="search" type = "date" onBlur = {filterTable} />
                        </div>
                        
                        <Table data={data} handleRemoveItem = {handleRemoveItem} />

                        <NewTask data={data} handleAddItem={handleAddItem} /> 
                        <div className="congrats">
                                <p>Congratulations!!🎉 You have finished all your tasks</p>
                                <img id = "giphy" src = "/images/job.webp"/>
                        </div>
                        
                </div>
        )
}
         
        

        

