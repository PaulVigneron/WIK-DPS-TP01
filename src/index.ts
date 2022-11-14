import express from "express";
import { IncomingHttpHeaders } from 'http';
import * as http from 'http';

const app = express();
const PING_LISTEN_PORT = 8080;

// app.get("/", (req, res) => {
//   res.send("This is a test web page !");
// });

///////////////HOME PAGE////////////////////////
app.get('/', function (req, res) {
  res.send('Oui oui baguette !');
});
////////////////////////////////////////////////



///////////////////HEADER PING///////////////////
app.get("/ping", (req, res) =>{
  res.send(req.headers);

});
////////////////////////////////////////////////



//////////////////404 NOT FOUND///////////////////
app.all('*', (req, res) => {
  res.status(404).send();
});
//////////////////////////////////////////////////


app.listen(8080, () => {
  console.log("The application is listening on port 8080!");
});