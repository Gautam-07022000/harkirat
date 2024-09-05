// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

  



  function setTimeoutPromisified(millisec)
  {
    return new Promise(resolve => setTimeout(resolve, millisec));
  }

  function callback1()
  {
    console.log("print");
  }

  setTimeoutPromisified(5000).then(callback1);

  function random(resolve)          //resolve is also a function
  {
    setTimeout(resolve, 3000);
  }

  let p = new Promise(random);

  function callback()
{
    console.log("Promise Succeded");
}  

p.then(callback);

// console.log(p);


//fs.readfile , fs.writefile and cleafile

//Prmoisified Version of fs.readfile

const fs = require("fs");
const { readFile } = require("fs/promises");

// console.log(fs.readFileSync("a.txt", "utf-8"));

fs.readFile("a.txt", "utf-8",() => {
    console.log("done")
});


const p1 = await readFile 