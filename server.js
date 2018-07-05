const express = require('express');
const app = express();

const [name, port] = process.argv.slice(2);



app.get('/', (req, res) => {
      res.send("/client/build/index.html");
})

app.listen(port, () => {
    console.log(name, "is now listent on port", port);
})