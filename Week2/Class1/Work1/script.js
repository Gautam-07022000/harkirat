

function addTodo(){
    console.log("ok");
    const inputel = document.querySelector("input");

    console.log(inputel.value);
    inputel.value = "update"
}

let ctr2 = 0;
function clock(){
    console.log("ok");
    const inputel = document.getElementById("clock");
    console.log(ctr);
    ctr += 1;
    console.log(inputel.value);
    inputel.innerHTML = ctr;
}


// setTimeout(() => {
//     console.log("ok");
// }, 100);

// setTimeout(callback_function, 1000);

// function callback_function()
// {
//     console.log("osfk")
// }

let ctr = 0;
function callback(){
console.log(ctr);
ctr += 1;
}

setInterval(clock,1000);