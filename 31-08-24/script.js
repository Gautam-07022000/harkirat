const axios = require("axios");

async function getRecentPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")        //Here Response is a JS object upon which we can query multiple function like .json(), .text(), .blob()
    console.log(response)
    const data = await response.json();
    console.log(data)
    console.log("Request has been processed")
}
// getRecentPost()


async function getRecentPostAxios() {
    const  res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(res.data)
    
}

getRecentPostAxios()

async function fetchPosts() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    document.getElementById("posts").innerHTML = res.data.title;
  }
