CREATE TABLE volunteerQuestions (
    id 		SERIAL PRIMARY KEY,
    question TEXT,
     language char(2),
    CONSTRAINT question_lang_fk
        FOREIGN KEY (language)
        REFERENCES languages(langcode)
);