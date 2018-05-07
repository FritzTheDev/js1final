//import dependencies
import { mongoose } from 'mongoose';
import { express } from 'express';
import { bodyParser } from 'body-parser';

//initialize app
const app = express();

//set up middleware + View Engine
app.use(bodyParser.urlEncoded({extended:true}));
app.set('view engine', 'ejs');

