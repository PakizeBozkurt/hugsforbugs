import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

// Define the default welcome route
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
