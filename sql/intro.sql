-- SHOW databases;
-- comment

-- start using a database by specifying which one
USE world_x;

-- see what tables are in the database
SHOW TABLES;

-- select all from cities
SELECT * 
FROM cities;

-- select specific columns from cities (separated by a comma)
-- important for giving the user only what they need
SELECT name, countries_code
FROM cities;

-- filtering data using SQL
-- all cities in Australia using WHERE keyword
SELECT * 
FROM cities
WHERE countries_code = "AUS";

-- all cities with population less than 1000
SELECT *
FROM cities
WHERE population < 1000;

-- all cities that have 'san' in the name
-- LIKE is by default case insensitive
-- % is any amount of characters
SELECT * 
FROM cities 
WHERE name LIKE "san %";

-- all citites that have 'p' as the second character
-- _ represents any single character
SELECT *
FROM cities
WHERE `name` LIKE "_p%";

-- filtering on multiple conditions
SELECT *
FROM cities c
WHERE c.countries_code = "BRA" 
AND c.population < 100000;

SELECT *
FROM cities
WHERE countries_code = "BRA" OR population >= 1000000;

SELECT *
FROM cities
WHERE countries_code = "USA" OR countries_code = "TUR" OR countries_code = "AUS";

SELECT *
FROM cities 
WHERE countries_code IN ('USA', 'AUS', 'TUR');

-- cities with population between 1000 and 2000
SELECT *
FROM cities
WHERE population >= 1000 AND population <= 2000;

SELECT * 
FROM cities 
WHERE population BETWEEN 1000 AND 2000; -- inclusive



-- CHALLENGE
-- Country codes for cities with a population greater than 126304
SELECT countries_code
FROM cities 
WHERE population > 126304;

-- Population of cities with a name that contains two 'o|O' characters
SELECT name, population
FROM cities
WHERE name LIKE '%o%o%';

-- City records for cities in Afghanistan or Congo
SELECT * 
FROM cities
WHERE countries_code = 'AFG' OR countries_code = 'COG';

-- Country codes for cities with an id divisible by 23
SELECT id, countries_code 
FROM cities
WHERE id % 23 = 0;

-- City names and populations for cities with a name that begins with a|A or with a country code that begins with a|A
-- BINARY
SELECT name, population, countries_code
FROM cities
WHERE name LIKE 'a%' 
OR countries_code LIKE 'a%';

-- Id and population for cities that have a population greater than 104234 or a name thats start with new
SELECT id, population, name
FROM cities
WHERE population > 104234 
OR name LIKE 'new%';


-- first 100 records
SELECT * FROM cities LIMIT 100;
-- first 100 records offset 1
SELECT * FROM cities LIMIT 1, 100;
-- first 100 records offset 50;
SELECT * FROM cities LIMIT 100 OFFSET 50;

SELECT * 
FROM cities WHERE name 
LIKE '_b%' 
LIMIT 2, 30;

-- ordering data
SELECT * 
FROM cities 
ORDER BY population ASC;

SELECT * 
FROM cities 
ORDER BY population DESC;

SELECT name, population
FROM cities
WHERE name LIKE '%x'
ORDER BY population DESC
LIMIT 5;



-- CHALLENGE
-- Get the name and country code for 20 cities that have a population greater than 123123, order your results by country_code from A-Z
SELECT name, countries_code, population
FROM cities
WHERE population > 123123
ORDER BY countries_code ASC
LIMIT 20;

-- Get the name and country code for 13 cities that have a population less than 1231231, order your results by country_code from Z-A
SELECT name, countries_code, population 
FROM cities 
WHERE population < 123123
ORDER BY countries_code DESC
LIMIT 13;

-- Get all fields for 10 cities in USA ordered by name A-Z and also descending population
SELECT *
FROM cities
WHERE countries_code = "USA"
ORDER BY population DESC
LIMIT 10;

-- Get all fields for the 3 most populated cities in Saudi Arabia
SELECT *
FROM cities
WHERE countries_code = 'SAU'
ORDER BY population DESC
LIMIT 3;

-- Get all fields for the 6 least populated cities in Saudi Arabia
SELECT *
FROM cities
WHERE countries_code = 'SAU'
ORDER BY population ASC
LIMIT 6;

-- Get the names of the 5 most populated cities in Saudi Arabia, Brunei and Russia

(SELECT *
FROM cities 
WHERE countries_code = 'SAU'
ORDER BY population DESC
LIMIT 5
)
UNION
(SELECT *
FROM cities 
WHERE countries_code = 'BRN'
ORDER BY population DESC
LIMIT 5
)
UNION
(SELECT *
FROM cities 
WHERE countries_code = 'RUS'
ORDER BY population DESC
LIMIT 5
);

-- Get the names of the 3 least populated cities in Russian excluding the least populated city
SELECT *
FROM cities
WHERE countries_code = 'RUS'
ORDER BY population ASC
LIMIT 1, 3;

-- Create queries for 3 additional insights that you are interested in.
SELECT *
FROM country_languages; 

SELECT *
FROM countries;

-- What are the top 5 languages spoken in the Philippines?
SELECT cl.language, cl.is_official, cl.percentage
FROM countries c
INNER JOIN country_languages cl
ON c.code = cl.countries_code
WHERE c.name = 'Philippines'
ORDER BY cl.percentage DESC
LIMIT 5;

-- What's the average city population in USA?
SELECT AVG(population) 
FROM cities
WHERE countries_code = 'USA';

-- What countries have the same official language as France?
SELECT *
FROM countries c1 
INNER JOIN country_languages cl1
ON c1.code = cl1.countries_code
INNER JOIN country_languages cl2
ON cl1.countries_code
INNER JOIN countries c2
ON c2.code = cl2.countries_code
WHERE c1.name = 'France' AND cl1.is_official = 'T';

SELECT * 
FROM country_languages cl1
WHERE cl1.language IN (
	SELECT *
	FROM country_languages
	WHERE countries_code = 'FRA' AND is_official = 'T'
);

SELECT *
FROM countries c
INNER JOIN country_languages cl
ON c.code = cl.countries_code
WHERE c.name = 'France';

SELECT *
FROM country_languages cl1
WHERE cl1.countries_code = 'FRA' AND cl1.is_official = 'T'
UNION
SELECT *
FROM country_languages cl2
WHERE cl2.is_official = 'T';
