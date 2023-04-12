import {useState} from 'react';

export function Overview({taskList, setTaskList}){
    const [inputValue, setInputValue] = useState('');

    function handleFormSubmit(e){
        // prevent the form from sending http request
        e.preventDefault()
        // get data from form
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson)
        let newTodoObject = {
            task: formJson.todo, 
            id: crypto.randomUUID(),
        }
        // save the todo into state
        setTaskList([...taskList, newTodoObject])
        console.log(taskList)

    }
    function handleInput(e){
        setInputValue(e.target.value)
    }
    
    
    return(
        <div>
            <form onSubmit={handleFormSubmit} >
                <input defaultValue="Some initial value" value={inputValue} onChange={handleInput} name="todo"/>
                <button type="submit">Submit todo</button>
            </form>
        </div>
    )
}

// set up clearing the input using inputValue state 