const express = require("express");
const app = express();
app.use(express.json());
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const cors = require("cors");
const bcrypt = require("bcrypt");
const secret = "mysecret";

//Connect with Database

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "study_buddies",
	password: "CYFStudent123",
	port: 5432,
});

//CORS (Cross-Origin Resource Sharing) for incoming HTTP requests
app.use(
	cors({
		accessControlAllowOrigin: "*",
		accessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
		accessControlAllowHeaders:
			"Origin, X-Requested-With, Content-Type, Accept, Authorization",
		accessControlAllowCredentials: true,
	})
);


// Provide users to create an account by providing their email, password, and name.
app.post(
	"/register",
	[
		check("email", "Please include a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
		check("name", "Please enter a name").isLength({ min: 1 }),
	],
	async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password, name } = req.body;

		// Hash the password using bcrypt
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Check if user already exists in the database
		const result = await pool.query("SELECT * FROM trainees WHERE email = $1", [
			email,
		]);
		if (result.rows.length > 0) {
			return res.status(400).json({ errors: [{ msg: "User already exists" }] });
		}

		// Insert new user into the database
		const query =
			"INSERT INTO trainees (email, password, name) VALUES ($1, $2, $3)";
		const values = [email, hashedPassword, name];
		await pool.query(query, values);

		res.status(201).json({ msg: "User created" });
	}
);

// Provide allows registered users to log in by providing their email and password.
// If the credentials are valid, the server returns a JWT that can be used to authenticate subsequent requests.
// Handle POST request to login endpoint
app.post("/login", async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // Validate request body using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get email and password from request body
  const { email, password } = req.body;

  try {
    // Check if user with given email exists in database
    const result = await pool.query("SELECT * FROM trainees WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    // Compare password with hash in database
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    } else {
      // Create and return JWT token if authentication succeeds
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
          });
        }
      });
    }
  } catch (err) {
    // Return 500 error if server error occurs
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
});


// Returns a list of all availability records in the database.
// Only authenticated users can access this endpoint.
app.get("/availabilities", async (req, res) => {
	// Set the "Access-Control-Allow-Origin" header to allow requests from "http://localhost:3000"
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	// Define query options for different filters
	const queryOptions = {
		daily: "WHERE availability_date = CURRENT_DATE",
		weekly:
			"WHERE availability_date BETWEEN CURRENT_DATE AND CURRENT_DATE + interval '7' day",
		monthly: `WHERE (date_trunc('month', availability_date) = date_trunc('month', CURRENT_DATE)
              OR date_trunc('month', availability_date) = date_trunc('month', CURRENT_DATE + interval '1' month)) AND availability_date >= CURRENT_DATE`,
		name: `WHERE t.name = '${req.query.name}'`,
		email: `WHERE t.email = '${req.query.email}'`,
	};
	// Get filter and search values from query params, default to empty string if not present
	const queryFilter = queryOptions[req.query.filter] || "";
	const search = req.query.search || "";
	// Build SQL query to retrieve availabilities and trainee info with filters and search
	const query = `
        SELECT a.availability_date, a.topic, t.name, t.email
        FROM availability a
                 JOIN trainees t ON a.trainees_id = t.id ${queryFilter}
  AND (a.topic ILIKE '%${search}%' OR t.name ILIKE '%${search}%' OR t.email ILIKE '%${search}%')
        ORDER BY a.availability_date ASC
    `;
	// Execute query and send back result as JSON
	const { rows } = await pool.query(query);
	res.json({
		data: rows,
	});
});


// Provide allows authenticated users to create an availability record by providing the availability date, topic, and trainee ID.
app.post("/availability", (req, res) => {
	// eslint-disable-next-line no-unused-vars
	jwt.verify(req.headers.authorization, secret, (error, decoded) => {
		if (error) {
			res.status(401).json({ message: "Unauthorized" });
		} else {
			const { availability_date, topic, trainees_id } = req.body;
			pool.query(
				"INSERT INTO availability (availability_date, topic, trainees_id) VALUES ($1, $2, $3)",
				[availability_date, topic, trainees_id],
				/* eslint-disable no-unused-vars */
				(error, results) => {
					if (error) {
						throw error;
					}
					res.status(201).json({ message: "Availability created" });
				}
			);
		}
	});
});

// Provide authenticated users to update or delete an availability record by providing the availability ID, availability date, topic, and trainee ID.

app.put("/availability/:id", (req, res) => {
	jwt.verify(req.headers.authorization, secret, (error, decoded) => {
		if (error) {
			res.status(401).json({ message: "Unauthorized" });
		} else {
			const id = parseInt(req.params.id);
			const { availability_date, topic, trainees_id } = req.body;
			pool.query(
				"UPDATE availability SET availability_date = $1, topic = $2, trainees_id = $3 WHERE id = $4",
				[availability_date, topic, trainees_id, id],
				(error, results) => {
					if (error) {
						throw error;
					}
					res.status(200).json({ message: "Availability updated" });
				}
			);
		}
	});
});

app.delete("/availability/:id", (req, res) => {
	jwt.verify(req.headers.authorization, secret, (error, decoded) => {
		if (error) {
			res.status(401).json({ message: "Unauthorized" });
		} else {
			const id = parseInt(req.params.id);
			pool.query(
				"DELETE FROM availability WHERE id = $1",
				[id],
				(error, results) => {
					if (error) {
						throw error;
					}
					res.status(200).json({ message: "Availability deleted" });
				}
			);
		}
	});
});

app.listen(3001, () => {
	//eslint-disable-next-line
	console.log("Server has started on port 3001");
});
