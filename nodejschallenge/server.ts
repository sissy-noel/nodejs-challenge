//DEPENDENCIES
import * as express from "express";
import * as http from 'http';
import * as api from './source/index';
let app = express();
const httpServer = http.createServer(app);
let router = express.Router();
import * as bodyParser from "body-parser";


//Home page
router.get('/', function(req, res, next){
  //res.render('index');
  console.log("Welcome page should open");
  res.status(200).json({server: "Welcome to Home page"});
});

//Express
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Access api route
app.use('/', router);

// all environments
const httpPort = normalizePort(process.env.PORT || 3000);
app.set('port', httpPort); //app.set('port', process.env.PORT || 3000);

//add error handler
httpServer.on("error", onError);

//start listening on port
httpServer.on("listening", onListening);

//Start listening for HTTP requests: Start Server
//http.createServer(app).listen(app.get('port'), function () {
httpServer.listen(httpPort, function () {
    /*const host = server.address().address;
    const port = server.address().port;*/
    const host = 'localhost';
    //const port = 3000;
    console.log('NTD-API is listening at http://%s:%s', host, httpPort);
});