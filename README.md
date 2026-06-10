# sql from harkirat singh bootcamp

1. Creating tables and defining the schema

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  isDone BOOLEAN DEFAULT(FALSE) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
```

this above code creates todos table with mentioned fields and their schema.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) NOT NULL,
  password INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
```

2. updating the table or schema

```sql
ALTER TABLE users ADD COLUMN 'age' INT NOT NULL DEFAULT 0;
```

this above query will add the 'age' column in users table

```sql
ALTER TABLE users
  ADD COLUMN "gender" VARCHAR(10),
  ADD COLUMN "dob" DATE;
```

this is how we can write query when we want to add multiple columns

3. Till now, we are doing operations on table and now we will be doing operations/interactions with the data in tables.

how can i insert data in table. see below code

```sql
INSERT INTO users (username,email,password)
 VALUES ('shubham','shubham@gmail.com',292004);
```

this is how you will insert multiple rows in any tables

```sql
INSERT INTO users (name, age, gender, dob)
VALUES
  ('Shubham', 22, 'male',   '2002-05-15'),
  ('Riya',    20, 'female', '2004-08-22'),
  ('Arjun',   25, 'male',   '1999-03-10');
```

this is how you add multiple rows in one table

4. Now we want to read the data.

```sql
SELECT * FROM users;

-- All users will be users return here
```

```sql
SELECT username,email FROM users WHERE users.email = 'shubham@gmail.com'
```

this query will return username and email of user whose email = 'shubham@gmail.com'

5. now updating the data in tables.

```sql
UPDATE users SET password = 2026 WHERE users.email = 'shubham@gmail.com';
```

this will update the password of user whose email = 'shubham@gmail.com'

```sql
UPDATE users
SET age = 29, gender = 'male', dob = '1995-03-10'
WHERE username = 'swayam';
```

6. deleting data in tables

```sql
DELETE FROM users WHERE id = 1;
```

the above query will delete the users where id = 1, so shubham user is deleted because it has id = 1.

what if i ran following query.

```sql
DELETE FROM users
```

Note - this will delete all rows in users table
