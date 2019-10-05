//     I M P O R T S
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const tasksCtrl = require('./controllers/tasksCtr');
const app = express();

//     D O T  E N V
const dotenv = require('dotenv');
dotenv.config();
require('./config/database');

//     C O R S
// const corsOptions = {
//     origin: process.env.CORS_WHITELIST
// }

//     M I D D L E W A R E
// keep cors on top!
// app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
//     body parser helps ?
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



//    A P I   R O U T E S  
// Keep above catch all!
// app.use('/api/v1/tasks', taksCtrl);


//    C A T C H   A L L 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//    S T A R   S E R V E R
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Express app running on PORT ${PORT}`)
});