# Firestore

Firestore is a database. We want to store information somewhere other than our application is so that we have persistent data. This enables other people to access the same pieces of information.

Every user would have the most up-to-date information, for example an e-commerce store, we need to know when an item is out of stock.

If our frontend or backend is down, we still have the information safe in the database.

A database also enables flexibility in how we structure our application.

Firestore is a document database that's provided by Firebase. Firebase is a set of tools that simplify web application. It's free and easy to start with, and a popular choice in the industry. A nice feature of it is real-time updates, so we can utilise these feature to make our application re-fetch data when something changes in our database.

## Create, Read, Update, Delete (CRUD)

The simple tasks in a database.

## What Kind of Databases Are Out There?

### NoSQL (Document Databases)

- Also described as JSON in the cloud.
  - We will be writing JSON strings in a document and then parsing them.
- Requires more planning than SQL, but there's higher flexibility since there's not enforced structure.
- Duplicate data is highly likely because it's a lot harder to set up relationships.
- The big benefit with NoSQL is that there's very fast lookup for data in the database.

### SQL

Structured Query Language.

- Tables represent an entity of our system.
  - For example, a table contains our users, another table represents products.
  - These tables have relationships, and pieces of information between these tables link them (i.e., primary key like an ID).
- SQL in addition, enforces a structure in our database.
- There's also no duplication of data when it's structured properly.
- If we have complex relationships in the database, complex queries might have to be written to get what we're after.

## Links

https://firebase.google.com/docs/firestore/quickstart#web-modular-api

https://firebase.google.com/?gad_source=1&gclid=EAIaIQobChMI-ruOuPnigwMV0aNmAh2sYAixEAAYASAAEgJa2vD_BwE&gclsrc=aw.ds
