CREATE TABLE skills (
    id 		SERIAL PRIMARY KEY,
    skillName varchar(100),
    description varchar(3000),
    teachable char(1),
    language char(2),
    CONSTRAINT skill_lang_fk
        FOREIGN KEY (language)
        REFERENCES languages(langcode)
);