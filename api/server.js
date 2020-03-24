require("dotenv").config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session);
const knex = require('../db/dbConfig');


const sessionConfig = {
  name:'session-cookie',
  secret: 'solar',
  resave: false,
  saveUninitialized: true, 
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true 
  },
  store:new KnexStore({
    knex,
    tablename:'sessions',
    createtable:true,
    sidfieldname:'sid',
    clearInterval: 1000 * 60 * 10,
  })
};

const authRouter = require('../routers/auth-router');

const server = express();

// middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

// Routes
server.use('/api/', authRouter);

server.get('/', (req, res) => {
    res.json({ apiDocs: 'https://documenter.getpostman.com/view/10583912/SzKbLvCk?version=latest'})
});

module.exports = server;