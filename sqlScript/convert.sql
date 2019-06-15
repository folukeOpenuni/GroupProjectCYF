
delete from skilllevels;
delete from skills;
delete from volunteers;
delete from locations;

insert into locations (city, country)
  select distinct substring(city from '[a-zA-Zí]+'),
                  substring(city from '\(([a-zA-Z]+)\)')
    from tempvol;

insert into volunteers
  ( firstName, lastName, email, phone,
    weekendavailability, weekdayavailability, 
    otheravailability, classavailability, otherskills,
    status, locationid, submissiondate, comments,
    welcomeemaildate, onboardemaildate
  )
  select  firstname, lastname, email, phone,
          replace(substring(avail from 'Sat'), 'Sat', 'YES'),
          replace(substring(avail from 'wee'), 'wee', 'YES'),
          replace(substring(avail from 'Oth'), 'Oth', 'YES'),
          case when interests like '%Teaching%'
               then replace(substring(avail from 'Sat'), 'Sat', 'YES')
          end,
          other,
          status,
          (select id 
            from locations l 
            where l.city = substring(t.city from '[a-zA-Zí]+')),
          date '1900-01-01' + cast(trunc(submitdt) as integer),
          comments,
          date '1900-01-01' + cast(trunc(welcomedt) as integer),
          date '1900-01-01' + cast(trunc(onboarddt) as integer)
    from tempvol t;

insert into skills (skillname) values                                                                 
  ('HTML & CSS'),
  ('JavaScript'),
  ('React'),
  ('Node/SQL'),
  ('Agile Methodologies');

insert into skills (skillname)
  select distinct trim(regexp_split_to_table(skills, E','))
    from tempvol;

insert into skilllevels
  (volunteerid, skillid, skilllevel)
  select v.id, s.id, t.htmlcss
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (s.skillname = 'HTML & CSS')
    where htmlcss is not null;

insert into skilllevels
  (volunteerid, skillid, skilllevel)
  select v.id, s.id, t.js
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (s.skillname = 'JavaScript')
    where js is not null;

insert into skilllevels
  (volunteerid, skillid, skilllevel)
  select v.id, s.id, t.react
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (s.skillname = 'React')
    where react is not null;

insert into skilllevels
  (volunteerid, skillid, skilllevel)
  select v.id, s.id, t.node
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (s.skillname = 'Node/SQL')
    where node is not null;

insert into skilllevels
  (volunteerid, skillid, skilllevel)
  select v.id, s.id, t.agile
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (s.skillname = 'Agile Methodologies')
    where agile is not null;

insert into skilllevels
  (volunteerid, skillid)
  select v.id, s.id
    from tempvol t join
        volunteers v on (t.firstname = v.firstname and t.lastname = v.lastname) join
        skills s on (t.skills like '%'||skillname||'%');

