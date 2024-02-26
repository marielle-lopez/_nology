-- start using a database by specifying which one
USE world_x;

-- see what tables are in the database
SHOW TABLES;

-- list every city in the system with country name, city name, population
-- one-to-many relationships (country has many cities, city only owned by one country)
SELECT
	c.name AS country,
    ci.name AS city,
    ci.population
FROM countries AS c
JOIN cities AS ci ON (c.code = ci.countries_code); -- ON clause is like the WHERE condition

-- find the most populated city in countries that end with 'stan'
SELECT co.name AS country, MAX(ci.population) AS city_population 
FROM countries AS co
JOIN cities AS ci ON (co.code = ci.countries_code)
WHERE co.name LIKE '%stan'
GROUP BY co.name;

-- inner join
-- left join
-- right join
-- full join



-- CHALLENGE
-- Get the names for 100 most populated cities together with the countries they're located in and their respective population.
SELECT 
	co.name AS country, 
    ci.name AS city, 
    ci.population
FROM cities AS ci
JOIN countries AS co ON (ci.countries_code = co.code)
ORDER BY ci.population DESC
LIMIT 100;

-- Get only the official languages spoken in each country.
SELECT 
	co.name AS country, 
    cl.language AS official_language, 
    cl.percentage
FROM countries AS co
JOIN country_languages AS cl ON (co.code = cl.countries_code)
WHERE cl.is_official = 'T';

-- Get all the records for all three tables without repeating columns multiple times.
SELECT 
	co.code, 
    co.name AS country, 
    ci.name AS city, 
    ci.district, 
    cl.language, 
    cl.is_official, 
    cl.percentage
FROM countries AS co
JOIN cities AS ci ON (co.code = ci.countries_code)
JOIN country_languages AS cl ON (cl.countries_code = ci.countries_code);

SELECT DISTINCT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME IN ('countries', 'cities', 'country_languages');

-- Get all the countries that people speak French in.
SELECT 
	co.name AS country, 
    cl.is_official, 
    cl.percentage
FROM country_languages AS cl
JOIN countries AS co ON (co.code = cl.countries_code)
WHERE cl.language = 'French';

-- Get all the cities where English is spoken with a population over 300000.
SELECT 
	ci.countries_code, 
    ci.name AS city, 
    ci.district, 
    ci.population, 
    cl.is_official, 
    cl.percentage
FROM cities AS ci
JOIN country_languages AS cl ON (ci.countries_code = cl.countries_code)
WHERE cl.language = 'English' AND ci.population > 300000;

-- Get the names of the cities, countries and languages spoken for every country code that has 'U' as the middle letter.
SELECT 
	co.code, 
    co.name AS country, 
    ci.name AS city, 
    cl.language, 
    cl.is_official, 
    cl.percentage
FROM countries AS co
JOIN cities AS ci ON (co.code = ci.countries_code)
JOIN country_languages AS cl ON (cl.countries_code = ci.countries_code)
WHERE co.code LIKE '_U_'; -- _ is wildcard character

-- Get the names of the countries with Arabic as the official language.
SELECT *
FROM countries AS co
JOIN country_languages AS cl ON (co.code = cl.countries_code)
WHERE cl.language = 'Arabic' AND cl.is_official = 'T';

-- Get the population, city and country names where Chinese is spoken by less than 10% of the people.
SELECT 
	co.name AS country, 
    ci.name AS city, 
    ci.population, 
    cl.percentage
FROM countries AS co
JOIN country_languages AS cl ON (co.code = cl.countries_code)
JOIN cities AS ci ON (co.code = ci.countries_code)
WHERE cl.language = 'Chinese' AND cl.percentage < 10
ORDER BY cl.percentage DESC;