import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';

const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

let app = express();
//config app
const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200,
    credentials: true
}
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors(corsOptions))
viewEngine(app);
initWebRoutes(app);
let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port : " + port)
})
