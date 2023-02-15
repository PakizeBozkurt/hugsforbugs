
CREATE TABLE trainees (
                          id SERIAL PRIMARY KEY,
                          first_name VARCHAR(50) NOT NULL,
                          surname VARCHAR(50) NOT NULL,
                          email VARCHAR(255) NOT NULL,
                          CHECK (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  slack_username VARCHAR(50) NOT NULL
);


CREATE TABLE availability (
                              id SERIAL PRIMARY KEY,
                              availability_date DATE NOT NULL,
                              availability_time TIME NOT NULL,
                              topic VARCHAR(100) NOT NULL,
                              trainees_id INTEGER REFERENCES trainees(id) ON DELETE CASCADE
);