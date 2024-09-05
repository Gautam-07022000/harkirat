const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/signup', (req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Signup Page</h1>
          <form action="/signup" method="post">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Signup</button>
          </form>
        </body>
      </html>
    `);
  });
  
  // Route to handle form submission
  app.post('/signup', (req, res) => {


    // console.log(req);
    console.log(req.body);

    const { email, password } = req.body;
  
    // Store user data in the array
    var  users = [];
    users.push({ email, password });
  
    // Print user data to the console
    console.log(users);
  
    res.send('Signup successful!');
});


  
app.get('/route2', (req, res) => {
    res.send('Hello World! from route2')
  })

app.get('/chat', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>
                    Chat
                </h1>
            </body>
        </html>
        `)
  })

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})