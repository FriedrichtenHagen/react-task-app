export function Overview({taskList, setTaskList}){
    // create a serial number to be used as a key in the list items
    let todoId = 0  

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
    
    
    return(
        <div>
            <form onSubmit={handleFormSubmit} >
                <input defaultValue="Some initial value" name="todo"/>
                <input type="checkbox" name="checkbox"></input>
                <button type="submit">Submit todo</button>
            </form>
        </div>
    )
}