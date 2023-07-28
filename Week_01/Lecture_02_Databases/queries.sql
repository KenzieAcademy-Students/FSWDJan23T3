-- For all queries, there are 3 major parts:
-- 1. Query type (INSERT, SELECT, UPDATE, DELETE for CRUD, respectively)
-- 2. Which table is the primary target of the query
-- 3. Which row(s) specifically are you trying to query

-- CREATE A NEW POST
-- Raw MongoDB: db.posts.create({ content: "some content", author: 27 })
-- If you wanted to create the relationship of the user having the posts as well, you 
-- would also need to query and update the user itself and nest the new post's id

-- Raw SQL:
INSERT INTO
  posts
  (content, author_id)
VALUES
  ("some content", 27);

-- FIND ALL POSTS
-- Raw MongoDB: db.posts.find()

-- Raw SQL: this will retrieve every single row from the posts table
SELECT 
  * 
FROM
  posts;

-- FIND A SINGLE POST
-- Raw MongoDB: db.posts.find({ _id: someid })

-- Raw SQL:
SELECT 
  *
FROM 
  posts
WHERE 
  id = something;

-- FIND A SINGLE POST AND INCLUDE THE AUTHOR
-- Raw MongoDB: 
--  db.posts.find({ 
--    _id: someid, 
--    $lookup: {
--      from: "users",
--      localField: "author",
--      foreignField: "_id",
--      as: author
--    }
--   })

-- Raw SQL: SQL uses join statements to grab data from other tables
SELECT 
  *
FROM 
  posts 
JOIN 
  users 
ON
  posts.author_id = users.id
WHERE 
  posts.id = someid;

-- UPDATE A POST
-- Raw MongoDB: db.posts.updateOne({ _id: someId }, { content: "some new content" }, /* potential third argument to keep other fields the same? */)

-- RAW SQL:
UPDATE
  posts 
SET 
  content = "some new content"
WHERE 
  id = someid;

-- DELETE A POST
-- Raw MongoDB: db.posts.deleteOne({ _id: someId }) 
-- If you also nested the post's object reference into the user document as well,
-- you'll need to find that user and remove that reference too.

-- Raw SQL: 
DELETE FROM 
  posts
WHERE 
  id = someid;