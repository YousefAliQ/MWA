# MWA - Homework 07 - Mongodb 01

## Schema Design Exercise

Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements:

* Books have an `ISBN number` and are categorized by `author` and tagged by `keywords` to facilitate search
* Books can be borrowed by students, so the librarian will be able to check all borrowed books and their `return date` so he may contact students who are late returning their books.
  
## Coding Exercise

Create a new DB called `homework07` (Local or DaaS)  
Implement Restful API with Express for all CRUD operations so you may: `Find/FindOne/Add/Delete` documents, use appropriate HTTP verbs for an entity called: `lectures`, document structure is:  

```javascript
lectures = [{_id, course, lecture}]
```

* Test your API using REST Client.  
* Implement a route (`GET /search/:q`) to search if the lecture name contains the passed `:q` parameter.  
* Send the results as JSON.  
* Upload your code to Github (without dependencies).
