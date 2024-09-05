

function addTodo(div){


    const divText = div.parentElement.querySelector("input").value;

    if(divText.trim() == "")
        alert("Please Enter Some Text and try again")
    else
        render(divText);
    
}

function deleteTodo(button) {
    // Find the parent div of the button and remove it
    if(button === "first"){
        const outerDiv = document.getElementById("TodosDiv")
        const innerDivs = outerDiv.querySelectorAll("div");
        innerDivs[0].remove();
       
    }
    else if(button === "last"){
        const outerDiv = document.getElementById("TodosDiv")
        const innerDivs = outerDiv.querySelectorAll("div");
        innerDivs[innerDivs.length - 1].remove();
    }
    else{
        const parentDiv = button.parentElement;
        parentDiv.remove();
    }
}


function render(h4Val)
{
    const newDiv = document.createElement("div");

    const newButton = document.createElement("button");
    newButton.textContent = "Delete";
    newButton.setAttribute("onclick", "deleteTodo(this)");

    const newHeading = document.createElement("h4");
    newHeading.textContent = h4Val;

    newDiv.appendChild(newHeading);
    newDiv.appendChild(newButton);

    document.getElementById("TodosDiv").appendChild(newDiv);

}