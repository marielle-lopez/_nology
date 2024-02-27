# SQL

- Structured query language

MySQL is a type of database.

SQL is a standard language for database creation and manipulation, and MySQL is a relational database program that uses SQL queries. SQL is used to communicate with a database.

A relational database (RDB) organises data into rows and columns, creating tables. An RDB has the ability to establish relationships between information by joining tables, making it easy to understand and gain insights about the relationship between various data points.

Everything is a table, which makes our data more structured. Each entry that's added to a table will look the 'same'.

If we have movies, we need to create a table called 'movies'. Each column of it will represent each property of a movie (i.e., title, director, genre). Each row is an entry of 'movies'. We would create new tables called 'directors' and 'genres' as they can be their own thing, this would prevent the repetition of data.

We use create relationships between tables by using a unique value, typically an ID.

In this course, we'll be using APIs (i.e., Spring) to create SQL queries for us to interact with our database rather than writing SQL ourselves.

## Syntax

Convention is to write SQL keywords in uppercase, makes it easier to read.

### General

```sql
USE world_x;

SELECT name, countries_code
FROM cities;
```

You can use backticks to wrap MySQL keywords if you're not actually using the MySQL keyword.

```sql
SELECT *
FROM cities
WHERE `name` LIKE "_p%";
```

You can give tables aliases using the `AS` keyword. You can also omit the `AS` keyword too.

- Becomes much more useful when you're joining different tables that have the same column headers

```sql
SELECT *
FROM cities AS c
WHERE c.countries_code = "BRA"
AND c.population < 100000;

SELECT *
FROM cities c
WHERE c.countries_code = "BRA"
AND c.population < 100000;
```

### Comments

```sql
-- this is a comment
```

### Filtering

Use the `WHERE` keyword.

```sql
SELECT *
FROM cities
WHERE countries_code = "USA" OR countries_code = "TUR" OR countries_code = "AUS";
```

```sql
SELECT *
FROM cities
WHERE countries_code IN ('USA', 'AUS', 'TUR');
```

```sql
SELECT *
FROM cities
WHERE population >= 1000 AND population <= 2000;

SELECT *
FROM cities
WHERE population BETWEEN 1000 AND 2000; -- inclusive
```

## Relationships

The primary key is typically an ID, it's a unique value that makes each row in a table unique from one another.

A foreign key is a reference to a primary key of another table, and this key exists to link one row in one table to another row in another table.

We place separate entities into their own tables, and then create relationships.

### One-to-one

Probably the most uncommon one.

- Login table: `email_address`, `user_id`
  - Foreign key in this table is `user_id`
- Users table: `first_name`, `last_name`, `id`
  - Primary key in this table is `id`
    A user has one set of login details, and a set of login details belong to one user.

### One-to-many

- Probably the most common one
- A student belongs to one cohort, but a cohort can have many students

Place the foreign key into the `students` table to not have a list of students inside of the `cohorts` tables.

### Many-to-many

You will need to create a join table to handle a many-to-many relationship between two entities in a relational database. In this join table, you store the foreign keys of both entities that are partaking in the many-to-many relationship.

## Normalisation

## Planning

Create an entity-relationship (ER) diagram.

## Resources and Quick Notes

Spring creates tables for us.

- Database migrations
- Seeders put data into your database
- You have your data stored somewhere else

- https://www.w3schools.com/sql/func_mysql_mod.asp

```SQL
SELECT * FROM cities WHERE BINARY name LIKE 'a%'; -- case sensitive
```

- https://www.lucidchart.com/pages/er-diagrams#:~:text=An%20Entity%20Relationship%20(ER)%20Diagram,each%20other%20within%20a%20system
