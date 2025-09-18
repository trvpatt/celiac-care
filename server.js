const express = require('express'); // load express
const app = express(); // create the express object


app.use(express.static('public')); // tell Express to serve files in the 'public' folder




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000, () => { // start the server on port 4000
  console.log('Server is running on http://localhost:4000');
});

