BEGIN;

-- DROP TABLE IF EXISTS users CASCADE;

-- DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
-- DROP TABLE IF EXISTS comments CASCADE;
-- DROP TABLE IF EXISTS likes CASCADE;

-- CREATE TABLE users (
--   userId SERIAL PRIMARY KEY ,
--   username VARCHAR NOT NULL,
--   email VARCHAR NOT NULL,
--   password VARCHAR NOT NULL
--  );

-- CREATE TABLE boards (
-- board SERIAL PRIMARY KEY,
-- inmatename  VARCHAR NOT NULL,
-- statenumber VARCHAR NOT NULL,
-- nickname    VARCHAR NOT NULL,
-- institution VARCHAR NOT NULL,
-- image TEXT  DEFAULT 'http://images.clipartpanda.com/prisoner-clipart-prisoner.png',
-- created_at TIMESTAMP DEFAULT current_timestamp
-- );

CREATE TABLE posts (
postId SERIAL PRIMARY KEY,
user_id integer REFERENCES users(userId) ,
title VARCHAR NOT NULL,
body text,
board integer,
created_at TIMESTAMP DEFAULT current_timestamp

);

CREATE TABLE comments(
commentId SERIAL PRIMARY KEY,
postId integer,
body   text NOT NULL,
username VARCHAR NOT NULL,
created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE likes(
  likeId SERIAL PRIMARY KEY,
  postId integer,
  username VARCHAR NOT  NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

-- -- CREATE TABLE userBoard(
-- --   userId integer NOT Null REFERENCES users(userId) ON UPDATE CASCADE,
-- --   board integer NOT Null REFERENCES boards(board) ON UPDATE CASCADE,
-- --   PRIMARY KEY (userId, board)
-- -- );

-- ALTER TABLE ONLY users
-- ADD CONSTRAINT username_pkey PRIMARY KEY (username);

-- ALTER TABLE ONLY posts
-- ADD CONSTRAINT board_fkey FOREIGN KEY (board)
-- REFERENCES boards(board) On DELETE CASCADE;


-- -- ALTER TABLE ONLY posts
-- -- ADD CONSTRAINT username_fkey FOREIGN KEY (username)
-- -- REFERENCES users(username) On DELETE CASCADE;


-- ALTER TABLE ONLY comments
-- ADD CONSTRAINT postId_fkey FOREIGN KEY (postId)
-- REFERENCES posts(postId) On DELETE CASCADE;


-- ALTER TABLE ONLY comments
-- ADD CONSTRAINT username_fkey FOREIGN KEY (username)
-- REFERENCES users(username) On DELETE CASCADE;


-- ALTER TABLE ONLY likes
-- ADD CONSTRAINT postId_fkey FOREIGN KEY (postId)
-- REFERENCES posts(postId) On DELETE CASCADE;


-- ALTER TABLE ONLY likes
-- ADD CONSTRAINT username_fkey FOREIGN KEY (username)
-- REFERENCES users(username) On DELETE CASCADE;


-- ALTER TABLE ONLY userBoard
-- ADD CONSTRAINT userId_fkey FOREIGN KEY (userId)
-- REFERENCES users(userId) On DELETE CASCADE;


-- ALTER TABLE ONLY userBoard
-- ADD CONSTRAINT board_fkey FOREIGN KEY (board)
-- REFERENCES boards(board) On DELETE CASCADE;

COMMIT;

-- SELECT doormen.name
-- FROM doormen
-- LEFT JOIN buildings
-- ON doormen.building_id = buildings.id
-- WHERE buildings.num_floors > 5
