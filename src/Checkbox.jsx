function Checkbox(props) {


    return (
        <div>
            <div>Hello</div>
            <div>
                {/* key is needed for react to run loop operations more performant. Use index or other unique value */}
                <div className={"form-check"}>
                    <input
                        className="form-check-input" // bootstrap stuff 
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        defaultChecked={props.localTodo.completed ? true : false} // check if the todo in the state is completed and render the checkbox
                        onChange={(event => { // WHEN CHECKBOX IS RECEIVING ONCHANGE EVENT
                            let index = props.todos.findIndex(todoToFind => todoToFind.id === props.localTodo.id)// find the position of the clicked checkbox in the list  - because we want to alter the list (its our state)
                            props.localTodo.completed = !props.localTodo.completed // flip the value in the js variable in the Changed element (not the element in the original list yet)
                            props.todos[index] = props.localTodo // move the updated onchange element in the original list
                            props.settodos(props.todos) // upodate the state with the new list 
                            //console.log(props.localTodo)
                        })}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {props.localTodo.title}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Checkbox;
