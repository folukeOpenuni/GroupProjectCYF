CREATE TABLE userAvailability (
    id 		SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL,
    location VARCHAR(30),
    weekendAvailability VARCHAR(3),
    weekdayAvailability VARCHAR(3),
    otherAvailability VARCHAR(3),
    classAvailability VARCHAR(3),  --weekend availability 1
  CONSTRAINT  user_availability_fk FOREIGN KEY (userID) REFERENCES users(id)
);