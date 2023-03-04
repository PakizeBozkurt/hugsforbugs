import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
const cors = require("cors");
const app = express();
app.use(express.json());
import logger from "./logger";

export const crs = () => {
app.use(
	cors({
		accessControlAllowOrigin: "*",
		accessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
		accessControlAllowHeaders:
			"Origin, X-Requested-With, Content-Type, Accept, Authorization",
		accessControlAllowCredentials: true,
	})
);

};

export const clientRouter = (apiRoot) => {
	const staticDir = path.join(__dirname, "..", "static");
	const router = Router();
	router.use(express.static(staticDir));
	router.use((req, res, next) => {
		if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
			return res.sendFile(path.join(staticDir, "index.html"));
		}
		next();
	});
	return router;
};

export const configuredHelmet = () => helmet({ contentSecurityPolicy: false });

export const configuredMorgan = () =>
	morgan("dev", {
		stream: { write: (message) => logger.info(message.trim()) },
	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

export const logErrors = () => (err, _, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	logger.error("%O", err);
	res.sendStatus(500);
};

//Create a middleware function to handle errors that are thrown in the try-catch blocks.

// function handleError(res, err) {
// 	console.error(err);
// 	res.status(500).json({ errors: [{ msg: "Server error" }] });
//}

//Create a middleware function to handle authentication so that it can be reused across endpoints.

// function authenticate(req, res, next) {
// 	const token = req.headers.authorization;
// 	if (!token) {
// 		return res.status(401).json({ message: "Unauthorized" });
// 	}

// 	jwt.verify(token, secret, (error, decoded) => {
// 		if (error) {
// 			return res.status(401).json({ message: "Unauthorized" });
// 		}

// 		req.user = decoded;
// 		next();
// 	});
// }
