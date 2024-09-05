

function deleteTodo(index)
{
    const ele = "todo" + index;
    const element = document.getElementById(ele);
    console.log(element)
    element.parentNode.removeChild(element);
}

function addTodo()
{
    console.log("i was called");
    const ele = document.getElementById("input")
    console.log(ele.value);
    const collection = document.getElementsByClassName("todo");
    console.log(collection.length)
    const divID = collection.length + 1;

    //Creating a new Div Element
    const newDiv = document.createElement("div");
    newDiv.className = "todo"
    newDiv.id = `todo${divID}`

    ///Create H4 Element
    const heading = document.createElement("h4");
    heading.textContent = ele.value;
    
    const button = document.createElement("button");
    button.textContent = "Delete Todo";
    button.setAttribute("onclick",`deleteTodo(${divID})`)

    newDiv.appendChild(heading);
    newDiv.appendChild(button);

    const todosDiv = document.getElementById("todosDiv");
    console.log(todosDiv)
    todosDiv.appendChild(newDiv);




}