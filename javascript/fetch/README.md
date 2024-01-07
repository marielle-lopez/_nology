# Fetch

`fetch` (also known as AJAX) allows you to make requests the same way browsers do while your page already exists/already loaded. It makes requests for us.

Requests have a format, and one part of a request are headers. Headers are metadata of a request.

Body is a part of the response of a request. Use `.text()` on a response to access the body.

You can use `.json()` on a response you expect to be in JSON format. JSON format is the preferred standard.

There are many different protocols that exist on the web, one of them being HTTP.

The thing with `.fetch()` is that it will throw an error that's not always useful.

We do requests asynchronously because they take time.

## Hypertext Transfer Protocol (HTTP)

Built upon the transmission control protocol (TCP). TCP is a reliable layer and quite big.

It's a unidirectional protocol.

When a response is being downloaded, the headers are downloaded first, then the body.

Requests and responses pretty much look the same.

A HTTP request is made up of:

- Headers - query parameters, accept header (telling the server what type of data you're accepting), content-type (telling the server what you're sending), authorisation key
  - Not necessarily highly related to the data, it's how you interact with the server
- Body - free form text, we only know what type of data the body is when we look at the content-type
- Method - applies the interaction you're trying to do with the server; below are the CRUD (create, read, update, delete) methods, it's also a header
  - GET - getting data from the server (200, 404)
  - POST - creating data (dealing with a request body) (201, 400)
  - PATCH - updating data (200, 404, 400)
  - PUT - rewriting data (200, 201, 400)
  - DELETE - deleting data (200, 404)

Response status codes tell us how the request went and what has happened. The are 3 main types of codes:

- 200 - a sign that things went well
  - 200 - OK
  - 201 - CREATED
- 400 - a sign that things didn't go well, occurred due to you (client error)
  - 400 - Bad request, usually due to bad data
  - 401 - Unauthorised
  - 403 - Forbidden, you're authenticated but don't have permission
  - 404 - Not found, you're trying to access something that doesn't exist
- 500 - a sign that things didn't go well, and not your fault (server-side errors)
  - 500 - Internal server error

Query parameters start with `?` and are delimited by `&`.

```
https://icanhazdadjoke.com/search?term=in&limit=30
```

## Pagination

Don't assume the number of records and total of pages because you won't know this information before you call your API.

When you get the first page, hope that this first page contains pagination data.

Then, get all remaining pages.

Depending on the quality of the API you're using, you might have to use offset and limit to do pagination.

```js
const fetchAllJokes = async (search = "") => {
  const url = `https://icanhazdadjoke.com/search?term=${search}`;

  // page, limit
  const firstPageData = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

  const numberOfPages = firstPageData.total_pages;

  const remainingPagePromises = [];

  for (let i = 2; i <= numberOfPages; i++) {
    const promise = fetch(`${url}&page=${i}`, {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());

    remainingPagePromises.push(promise);
  }

  const remainingPages = await Promise.all(remainingPagePromises);
  const allPages = [firstPageData ...remainingPages];
  const results = allPages.map((page) => page.results).flat();
};
```
