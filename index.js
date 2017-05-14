/**
 * Created by Sergei on 14.05.2017.
 */

let express = require('express');

let app = express();
let message = "Hello, Sergei!!! Test: 1.0.0";

app.get('/', (request, response) => { response.end(message) });

app.listen(process.env.PORT || 3300, console.log(message));