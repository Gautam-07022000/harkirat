// const PromiseOne = new Promise();

const { response } = require("express");

const PromiseOne = new Promise(function(resolve, reject)
{
    //Do an async task
    //DB calls, Cryptography related, network call or anything else
    setTimeout(function()
    {
        console.log("Async1 Task is complete");
        resolve();
    }, 1000)
    // resolve();
});

PromiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async2");
        resolve();
    },2000)
}).then(
    function(){
        console.log("Async 2 done");
    }
)


const PromiseThree = new Promise(function(resolve, reject)
{
    setTimeout(() => {
        console.log("Async 3");
        resolve({"username" : "Gautam", "age" : 24})
    },3000)
})

PromiseThree.then(function(data)
{
    console.log(data);
    console.log(`Async 3 data returned from Promise Functions is ${JSON.stringify(data)}`);
    console.log("Async 3 data returned from Promise Functions is : ", data);
})



const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        // let err = true;
        let err = false;
        if(!err)
        {
            resolve({"username" : "newName", "age" : 4})
        }
        else
        {
            reject('ERROR : Somehting went wrong')
        }
    },4000)
})

PromiseFour
.then((user) =>
{
    console.log(user); 
    return user.username;
})
.then(function(username_async4){
    console.log("username  found is : " + username_async4)
})
.catch(function(error) {
    console.log("Found an error in async 4 " + error)
})
.finally(() =>  console.log("The promise is either reslved or rejected"))



const promiseFive = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        // let error = true;
        let error = false;

        if(error)
        {
            reject("Async 5 got an error ")
        }
        else
        {
            resolve({"username" : "promise5", "age" : 5})
        }
    },5000)
})


async function consumePromiseFive()
{
    try
    {
        const response = await promiseFive
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
    // const response = await promiseFive                              // We cannot hold / call promiseFive like this promiseFive() because eventually promise is an object 
    // console.log(response);
}

consumePromiseFive();


// Async Await version for promise resolution
// async function getAllUsers() 
// {
//     try
//     {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//         const data = await response.json()  
//         console.log(data)
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
    
// }

// getAllUsers();


// .then version of Promise resolution

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => 
{return response.json()})
.then((data) => {
    console.log(data)})
.catch((err) => {
    console.log(err)
})