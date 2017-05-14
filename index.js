/**
 * Created by Sergei on 14.05.2017.
 */

let express = require('express');

let app = express();

app.listen(process.env.PORT || 3300, console.log("Hello, World!!!"));