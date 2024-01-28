const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()

import routeProfessor from "./routes/routeProfessor";
import routeAluno from "./routes/routeAlunos";
import routeNota from "./routes/routeNotas";
import routeDiretor from "./routes/routeDiretor";

import bodyParser from 'body-parser';

const app = express(); 
app.use(express.json());
app.use(cors())
app.use(routeProfessor)
app.use(routeAluno);
app.use(routeNota);
app.use(routeDiretor);

app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;