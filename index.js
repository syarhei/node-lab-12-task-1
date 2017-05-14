/**
 * Created by Sergei on 14.05.2017.
 */

let express = require('express');

let app = express();
let message = "Hello, Sergei Murkou!!!";

app.get('/', console.log(message));

app.listen(process.env.PORT || 3300, console.log(message));