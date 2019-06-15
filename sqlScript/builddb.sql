drop TABLE if exists volunteerAnswers;
drop TABLE if exists skillLevels;
drop TABLE if exists volunteers;
drop TABLE if exists volunteerQuestions;
drop TABLE if exists skills;
drop TABLE if exists languages;
drop TABLE if exists locations;


\include location.sql
\include languages.sql
\include skills.sql
\include volunteerQuestions.sql
\include volunteers.sql
\include skillLevel.sql
\include volunteerAnswers.sql
