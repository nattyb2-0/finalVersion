BEGIN;

INSERT INTO users (username, email, password) VALUES

  ('synclair',  'synclair@synclair.com', 'password'),
  ('taka',  'takataka@ga.edu', 'ahrens'),
  ('natty','nattyd@ga.edu', 'davis'),
  ('mike', 'mikec@ga.edu', 'mikecohenpassword');

INSERT INTO boards (inmatename, statenumber, nickname , institution , image) VALUES
('syree hakins', '328754-d', 'gank', 'NJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('alvin blankson', '328561-c', 'p.u', 'EJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('gary ainsley', '458754-d', 'garry', 'NJSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png'),
('thomas mack', '4577654-d', 'petey', 'BSP','http://images.clipartpanda.com/prisoner-clipart-prisoner.png');

INSERT INTO posts(username,title,body,board) VALUES
('synclair','suckas is not the move','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',9),
('taka','mines','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',9),
('taka','the world sucks','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',9),
('taka','phat ass butt','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',11),
('natty','missing you homie','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',10),
('mike','cant wait to be together','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',10),
('natty','we are fam','http://images.clipartpanda.com/prisoner-clipart-prisoner.png',12);

INSERT INTO comments(postId, body, username) VALUES
(15, 'this shit is dope','taka'),
(15, 'son you should have been there', 'natty'),
(15, 'meek said tell you hi','mike'),
(19, 'life aint fair my g','taka'),
(20, 'hold your head','synclair'),
(21, 'your baby moms aint shit', 'mike');

INSERT INTO likes(postId, username) VALUES
(15, 'mike'),
(15, 'taka'),
(15, 'synclair'),
(15,'natty'),
(20,'natty');

COMMIT;



