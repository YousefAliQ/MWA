# MWA - Homework 09 - Mongodb 03
## Exercise
This [JSON](http://mumstudents.org/cs572/lecture09/zips.zip) file contains a list of all the zip codes in the US. Import it into your MongoDB (`mongoimport`).  

mongoimport --db test --collection zipcodes --file zips.json

```javascript
{ "_id" : "52556", "city" : "FAIRFIELD", "loc" : [ -91.957611, 41.003943 ], "pop" : 12147, "state" : "IA" } 
```
Use the **Aggregation Framework** to write 4 different queries to:

1. Find all the zip codes in Iowa state.

db.zipcodes.find({state:"IA"})


2. Find all the zip codes with a population less than 10,000.

db.zipcodes.find({pop: {$lt: 10000}}).projection({_id: 1})


3. Find all cities that have more than one zip code, sort the results by state and city name.

> db.zipcodes.aggregate([{$group: {_id: {"state": '$state', "city":'$city'},"zip": {$sum: 1}}},{$match: {zip : {$gt: 1} }}, {$sort: {state: 1, city: 1}} ])

4. Display the least populated city in each state

> db.zipcodes.aggregate([{$group: {_id: {"state": '$state', "city":'$city'},"pop": {$sum: '$pop'}}}, {$sort: { pop: 1}},{$
group: {_id:"$_id.state", city:{$first: "$_id.city"}, pop: {$first: "$pop"}}} ])
