CREATE TABLE userActivities (
  id 		SERIAL PRIMARY KEY,
  userID INTEGER NOT NULL,
  teaching VARCHAR(3),
  runningAndOrganisation VARCHAR(3),
  accountingAndBooking VARCHAR(3),
  coaching VARCHAR(3),
  eventManagement VARCHAR(3),
  gradJobPlacement VARCHAR(3),
  growthMarketing VARCHAR(3),
  journalism VARCHAR(3),
  corporateOutreach VARCHAR(3),
  pedagogy VARCHAR(3),
  projectManagement VARCHAR(3),
  volunteerEngagement VARCHAR(3),
  CONSTRAINT  user_activities_fk FOREIGN KEY (userID) REFERENCES users(id)
);