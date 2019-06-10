CREATE TABLE volunteers (
    id 		SERIAL PRIMARY KEY,
    firstName    VARCHAR(30) NOT NULL, -- first name of volunteer
    lastName    VARCHAR(30) NOT NULL,    --volunteer last name  
    email 	VARCHAR(120) NOT NULL,      --voulunteer
    phone 	VARCHAR(20),                 -- volunteer phone
    weekendAvailability VARCHAR(3),
    weekdayAvailability VARCHAR(3),
    otherAvailability VARCHAR(3),
    classAvailability VARCHAR(3), 
    locationID INTEGER,
    status VARCHAR(20) NOT NULL,
    submissionDate DATETIME,
    comments VARCHAR(100),
    welcomeEmailDate DATETIME,
    onboardEmailDate DATETIME,
    CONSTRAINT  volunteers_location_fk 
      FOREIGN KEY (locationID) 
      REFERENCES locations(id)
);
