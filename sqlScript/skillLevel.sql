CREATE TABLE skillLevel (
    volunteerID INTEGER NOT NULL,
    skillID INTEGER,
    skillLevel INTEGER,
    CONSTRAINT PRIMARY KEY (volunteerID, skillID) --makes this column the primary key
  CONSTRAINT  volunteer_skill_fk 
    FOREIGN KEY (volunteerID)
    REFERENCES volunteer(id),
  CONSTRAINT skill_level_fk
     FOREIGN KEY (skillID)
      REFERENCES skills (id)
);
