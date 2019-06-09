CREATE TABLE skillLevel (
    id 		SERIAL PRIMARY KEY,
    userID INTEGER NOT NULL,
    htmlCss INTEGER,
    javaScript INTEGER,
    react INTEGER,
    nodeSql INTEGER,
    agileMethodology INTEGER,
    otherExpertise VARCHAR(300),
  CONSTRAINT  user_skill_fk FOREIGN KEY (userID) REFERENCES users(id)
);