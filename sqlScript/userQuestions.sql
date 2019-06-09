CREATE TABLE userQuestions (
    id 		SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL,
    communityChangeAnswer VARCHAR,
    impactCommunityAnswer VARCHAR,
    skillAnswers VARCHAR,
  CONSTRAINT  user_questions_fk FOREIGN KEY (userID) REFERENCES users(id)
);