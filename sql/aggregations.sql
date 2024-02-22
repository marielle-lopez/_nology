-- start using a database by specifying which one
USE world_x;

-- see what tables are in the database
SHOW TABLES;

-- total number of cities
SELECT COUNT(*) AS total_cities
FROM cities;

-- total number of cities in Russia
SELECT COUNT(*)
FROM cities
WHERE countries_code = 'RUS';

-- total number of countries using the cities table
SELECT COUNT(DISTINCT countries_code)
FROM cities;

-- total number of cities in each country using the countries_code
SELECT c.countries_code, COUNT(*) AS total_cities
FROM cities AS c
GROUP BY c.countries_code
ORDER BY total_cities DESC;

-- average population count for every city in every country
SELECT 
	c.countries_code,
	AVG(c.population) AS avg_population
FROM cities AS c
GROUP BY c.countries_code
ORDER BY avg_population ASC;

-- total population for the top 10 most populated countries
SELECT c.countries_code, SUM(c.population) AS country_population
FROM cities AS c
GROUP BY c.countries_code
ORDER BY country_population DESC
LIMIT 10;

-- get a comma delimited list of cities for every country
SELECT 
	c.countries_code,
    GROUP_CONCAT(c.name) AS city_list
FROM cities AS c
GROUP BY c.countries_code;


-- CHALLENGE

-- Find the total population in Afghanistan
SELECT 
	c.countries_code, 
    SUM(c.population) AS total_population
FROM cities AS c
WHERE c.countries_code = 'AFG';

-- Find the average population of cities in Saudi Arabia.
SELECT 
	c.countries_code, 
	AVG(c.population) AS avg_population
FROM cities AS c
WHERE c.countries_code = 'SAU';

-- Find the 10 smallest country populations.
SELECT 
	c.countries_code,
    SUM(c.population) AS total_population
FROM cities AS c
GROUP BY c.countries_code
ORDER BY total_population
LIMIT 10;

-- Find the top 10 most populated countries that end with stan
SELECT 
	c.countries_code,
    SUM(c.population) AS total_population
FROM cities AS c
INNER JOIN countries AS co
ON c.countries_code = co.code
WHERE co.name LIKE '%stan'
GROUP BY c.countries_code
ORDER BY total_population DESC
LIMIT 10;

SELECT c.code FROM countries AS c WHERE c.name LIKE '%stan';

SELECT 
	c.countries_code,
	SUM(c.population) AS total_population
FROM cities AS c
WHERE c.countries_code IN ('AFG', 'KAZ', 'KGZ', 'PAK', 'TJK', 'TKM', 'UZB')
GROUP BY c.countries_code
ORDER BY total_population DESC
LIMIT 10;

SELECT 
	c.countries_code,
	SUM(c.population) AS total_population
FROM cities AS c
WHERE c.countries_code IN (SELECT c.code FROM countries AS c WHERE c.name LIKE '%stan')
GROUP BY c.countries_code
ORDER BY total_population DESC
LIMIT 10;

-- Find the least populated city for the top 10 most populated countries.
SELECT
	c.countries_code,
    SUM(c.population) AS total_population
FROM cities AS c
GROUP BY c.countries_code
ORDER BY total_population DESC
LIMIT 10, 1;

SELECT
	c.countries_code,
	MIN(c.population) AS city_population,
    SUM(c.population) AS total_population
FROM cities AS c
GROUP BY c.countries_code
ORDER BY total_population DESC
LIMIT 10;

-- !! Find the most populated city in countries that end with stan !!
SELECT 
	c.countries_code,
    MAX(c.population) AS city_population
FROM cities AS c
INNER JOIN countries AS co
ON c.countries_code = co.code
WHERE co.name LIKE '%stan'
-- GROUP BY c.countries_code
ORDER BY c.population;

SELECT 
	c.countries_code,
    MAX(c.population) AS city_population
FROM cities AS c
WHERE c.countries_code IN (SELECT c.code FROM countries AS c WHERE c.name LIKE '%stan')
GROUP BY c.countries_code
ORDER BY city_population;

-- Find the average population of cities that have a country code that contains a T
SELECT 
	c.countries_code,
	AVG(c.population) AS avg_population
FROM cities AS c
WHERE c.countries_code LIKE '%t%'
GROUP BY c.countries_code;

-- Find the most populated and least populated cities for each country that ends with stan, should be ordered alphabetically.
SELECT
	c.countries_code,
	MIN(c.population),
    MAX(c.population)
FROM cities AS c
WHERE c.countries_code IN (SELECT c.code FROM countries AS c WHERE c.name LIKE '%stan')
GROUP BY c.countries_code;

SELECT c.countries_code, c.name, c.population
FROM cities AS c
INNER JOIN countries AS co
ON c.countries_code = co.code
WHERE co.name LIKE '%stan'
GROUP BY c.countries_code, c.name, c.population
ORDER BY c.name;