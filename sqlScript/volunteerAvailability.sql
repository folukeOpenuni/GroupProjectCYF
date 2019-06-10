CREATE TABLE volunteerAvailability (
    id 		SERIAL PRIMARY KEY,
    volunteerID INTEGER NOT NULL,
    weekendAvailability VARCHAR(3),
    weekdayAvailability VARCHAR(3),
    otherAvailability VARCHAR(3),
    classAvailability VARCHAR(3),  --weekend availability 1
  CONSTRAINT  volunteer_availability_fk
   FOREIGN KEY (volunteerID) 
   REFERENCES volunteers(id)
);