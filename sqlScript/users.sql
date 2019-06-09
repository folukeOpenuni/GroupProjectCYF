CREATE TABLE users (
    id 		SERIAL PRIMARY KEY,
    firstName    VARCHAR(30) NOT NULL,
    lastName    VARCHAR(30) NOT NULL,    
    email 	VARCHAR(120) NOT NULL,
    phone 	VARCHAR(20)
)