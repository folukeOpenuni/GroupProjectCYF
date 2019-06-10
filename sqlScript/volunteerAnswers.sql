CREATE TABLE volunteerAnswers(
    id SERIAL PRIMARY KEY,
    questionID INTEGER NOT NULL,
    volunteerID INTEGER NOT NULL,
    answer TEXT,
     CONSTRAINT  volunteer_answer_fk
   FOREIGN KEY (volunteerID) 
   REFERENCES volunteers(id),
   CONSTRAINT volunteer_question_fk
   FOREIGN KEY (questionID)
   REFERENCES volunteerQuestions(id)
);