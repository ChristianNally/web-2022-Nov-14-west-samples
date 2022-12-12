# W05D01 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`


Front end
Back end
Database/Data persistence

client <===TCP/HTTP===> server <===TCP/POSTGRES===> database server

RDBMS
Relational DataBase Management System/Server (psql)

Database
Collection of tables

Item      Price   Calories
Big Mac   4.99    800
L. Fries  3.99    600

rows === records
columns === fields

Relational Database
Every table is related to at least one other table













### SELECT Challenges

For the first 6 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
-- using a hardcoded date
SELECT *
FROM users -- on the end of lines
-- you can put comments wherever you like
WHERE country = 'Canada' AND payment_due_date < 'Dec 12, 2022';

SELECT *, NOW()
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

SELECT *, CURRENT_DATE
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

6. List all the countries users live in; don't repeat any countries

```sql
SELECT DISTINCT country
FROM users
ORDER BY country;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

7. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;
```

8. List all albums along with how many songs each album has

```sql
SELECT albums.*, COUNT(songs.id)
FROM albums
JOIN songs ON songs.album_id = albums.id
GROUP BY albums.id;
```

9. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT albums.*, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON songs.album_id = albums.id
GROUP BY albums.id
HAVING COUNT(songs.id) > 10;
```

10. List ALL albums in the database, along with their songs if any

```sql
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;

SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id;
```

11. List albums along with average song rating

```sql
SELECT albums.*, AVG(songs.rating)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id;

-- using the ROUND function
SELECT albums.*, ROUND(AVG(songs.rating) * 100) / 100 AS rounded_avg
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.id;
```

12. List albums and songs with rating higher than album average

```sql
-- this query will give us the average song rating for the specified album
SELECT AVG(rating)
FROM songs
WHERE album_id = 1;

-- this query will give us back all the songs (with album info) with a rating higher than specified (3.0)
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE songs.rating > 3.0;

-- we can use a subquery to put these two queries together
SELECT *,
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE songs.rating > (SELECT AVG(rating) FROM songs WHERE album_id = albums.id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
