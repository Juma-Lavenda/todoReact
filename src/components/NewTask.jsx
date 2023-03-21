import React, {useState} from "react";

export default function NewTask({data, handleAddItem}){
       
        const [formData, setFormData] = useState({
                Deadline:'',
                Task: ''
        });
        const [formVisible, setFormVisible] = useState(true);


        const handleInputChange = (event) => {
                const { name, value } = event.target;
                setFormData((prevState) => ({ ...prevState, [name]: value }));
        };


        const handleSubmit = (event) => {
                event.preventDefault();
                handleAddItem(formData)
                setFormVisible(false); // hide the form
                setTimeout(() => {
                setFormVisible(true); // show the form again after 5 seconds
                }, 5000);
         };
              
       
        return(
                formVisible && (
                <form className = "tasknew" onSubmit={handleSubmit}>
                        <div className="xform">
                                <h3>Add a new task</h3>
                        </div>
                        <div>
                                <h4>Deadline:</h4>
                                <input type = "Date" name = "Deadline" placeholder="Enter task deadline" value={formData.Deadline} onChange={handleInputChange} />
                                <h4>Task:</h4>
                                <input type = "text" placeholder="Enter task" className = "new--task" name="Task" value={formData.Task} onChange={handleInputChange} />
                        </div>
                        <button type = "submit" >Enter</button>
                </form> )

        )
}