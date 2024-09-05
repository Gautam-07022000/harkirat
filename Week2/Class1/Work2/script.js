

function deleteTodo(index)
{
    const ele = "todo" + index;
    const element = document.getElementById(ele);
    console.log(element)
    element.parentNode.removeChild(element);
}