CREATE TABLE applicationStatus (
    id 		SERIAL PRIMARY KEY,
    volunteerID INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL,
    submissionDate DATETIME,
    comments VARCHAR(100),
    welcomeEmailDate DATETIME,
    onboardEmailDate DATETIME,
  CONSTRAINT  user_status_fk FOREIGN KEY (userID) REFERENCES users(id)
);