// const http = require('http');
// const express = require('express');
// const app = express();

// const server = http.createServer(app);

// app.get('/:justTheName', (req, res) => {
//     res.send(`Hello ${req.params.justTheName}`);
// });

// server.listen(3000);
/////////////////////////////MADLIB 2/////////////////////

// const http = require('http');
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const server = http.createServer(app);

// // Alternatively, we could have used `readFileSync` to read the file contents
// // before we create and start the server.
// fs.readFile('templates/madlib2.html', (err, data) => {
//     const madlibHTML = data.toString();
//     app.get('/:justTheName/:thePlace', (req, res) => {
//         const {justTheName, thePlace} = req.params; // destructuring!
//         let updatedHTML = madlibHTML.replace('***NAME***', justTheName);        
//         updatedHTML = updatedHTML.replace('***PLACE***', thePlace);
//         res.send(updatedHTML);
//     });
    
// });

// server.listen(3000);

//////////////MADLIB 3///////////////
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

function greetingFor(whom) {
    const specialPeople = {
        "Oakley": "How wonderfully splendid it is to be in your presence again!",
        "Chris": "Oh hey...",
        "Milla": "Hello there"
    };

    const greeting = specialPeople[whom] || `Hello, ${whom}!`;

    return greeting;
}

app.get('/:justTheName', (req, res) => {
    const {justTheName} = req.params; // destructuring!
    res.send(greetingFor(justTheName));
});

server.listen(3000);