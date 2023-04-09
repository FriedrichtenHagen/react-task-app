export function Overview(){
    
    function handleFormSubmit(e){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        console.log(formData)
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.todo);
    }
    
    
    return(
        <div>
            <form onSubmit={handleFormSubmit} >
                <input defaultValue="Some initial value" name="todo"/>
                <button type="submit">Submit todo</button>
            </form>

        </div>
    )
}