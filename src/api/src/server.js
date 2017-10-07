import express from "express";
import api from "./api";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";

//define variables
let PORT = process.env.PORT || "3000";

let app = express();

addCors(app);
addBodyParser(app);
addSessionProvider(app);

app.use(cookieParser());

app.use("/api", api);

app.listen(PORT);

function addCors(app){
	app.use(function(req, res, next) {
		let allowedOrigins = ["http://localhost:8888", "http://dockerhost:8888"];

		let origin = req.headers.origin;

		if(allowedOrigins.indexOf(origin) > -1){
			 res.setHeader("Access-Control-Allow-Origin", origin);
		}	
		
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
		next();
	});	
}

function addBodyParser(app){
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
}

function addSessionProvider(app){
	app.use(session({
		secret: "keyboard",
		resave: false,
		saveUninitialized: true
	}));/*
	app.use(session({
		store: new RedisStore({
			host : redisIp,
			port : redisPort
		}),
		secret: "keyboard",
		resave: false,
		saveUninitialized: true
	}));		*/
}