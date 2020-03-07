# MWA - Homework 08 - Mongodb 02

## Exercise 01

Considering the following [`restaurants`](http://mumstudents.org/cs572/lecture08/restaurants.zip) collection that has information about all restaurants in the USA. Import the data into a local/cloud DB server.
```javascript

{ 
"address": { "building": "1007", 
	       "coord": [ -73.856077, 40.848447 ], 
	       "street": "Morris Park Ave", 
	       "zipcode": "10462" }, 
"district": "Bronx", 
"cuisine": "Bakery", 
    "grades": [ {"date": {"$date": 1393804800000}, "grade": "A", "score": },
                {"date": {"$date": 1378857600000}, "grade": "A", "score": 6}, 
                {"date": {"$date": 1358985600000}, "grade": "A", "score": 10}, 
                {"date": {"$date": 1322006400000}, "grade": "A", "score": 9}, 
                {"date": {"$date": 1299715200000}, "grade": "B", "score": 14}], 
    "name": "Morris Park Bake Shop", 
    "restaurant_id": "30075445" 
}

```
1. Write a MongoDB query to display all the documents in the collection restaurants. 

> db.restaurants.find({})

2. Write a MongoDB query to display the fields `restaurant_id`, `name`, `district` and `cuisine` 
for all the documents in the collection restaurant.

> db.restaurants.find({}, {"restaurant_id":1,"name":1, "district":1, "cuisine":1})

3. Write a MongoDB query to display the fields `restaurant_id`, `name`, `district` and `cuisine`, but exclude the field `_id` for all the documents in the collection restaurant.

db.restaurants.find({}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

4. Write a MongoDB query to display the fields `restaurant_id`, `name`, `district` and `zipcode`, but exclude the field `_id` for all the documents in the collection restaurant. 

> db.restaurants.find({}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipcode":1})

5. Write a MongoDB query to display all the restaurant which is in the `district` `"Bronx"`.

> db.restaurants.find({"district": "Bronx"}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipco
de":1})

6. Write a MongoDB query to display the first 5 restaurant which is in the `district` `"Bronx"`. 

db.restaurants.find({"district": "Bronx"}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipco
de":1})

7. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the `district` `"Bronx"`. 

> db.restaurants.find({"district": "Bronx"}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipco
de":1}).limit(5)

8. Write a MongoDB query to find the restaurants which locates in coord value less than `-95.754168`.

> db.restaurants.find({"address.coord":{ $lt: -95.754168}} ).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipcode":1})

9. Write a MongoDB query to find the restaurants that does not prepare any `cuisine` of `"American"` and their grade `score` more than `70` and `coord` value less than `-65.754168`. 

> db.restaurants.find({"cuisine":{ $nin: [-95.754168]}}, {"grades.score" : {$gt:70}}, {"address.coord" : {$lt: "-65.754168
"} } ).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "address.zipcode":1})

10. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which contains `'Wil'` as first three letters for its `name`. 

db.restaurants.find({"name": {$regex: "^Wil"}} ).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

11. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which contains `'ces'` as last three letters for its `name`.

db.restaurants.find({"name": {$regex: "ces$"}} ).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

12. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which contains `'Reg'` as three letters somewhere in its `name`. 

> db.restaurants.find({"name": {$regex: "Reg"}} ).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine"
:1})

13. Write a MongoDB query to find the restaurants which belongs to the `district` `"Bronx"` and prepared either `American` or `Chinese` dish.

> db.restaurants.find({"district" :"Bronx","cuisine": {$in:["American", "Chinese"]}}).projection({"_id":0, "r:1,"name":1, "district":1, "cuisine":1})

14. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which belongs to the `district` `"Staten Island"` or `"Queens"` or `"Bronx"` or `"Brooklyn"`. 

> db.restaurants.find({"district" : {$in:["Staten Island", "Queens", "Bronx", "Brooklyn"]}}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

15. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which are not belonging to the `district` `"Staten Island"` or `"Queens"` or `"Bronx"` or `"Brooklyn"`. 

> db.restaurants.find({"district" : {$nin:["Staten Island", "Queens", "Bronx", "Brooklyn"]}}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

16. Write a MongoDB query to find the `restaurant_id`, `name`, `district` and `cuisine` for those restaurants which achieved a `score` which is not more than `10`.

> db.restaurants.find({"grades.score" : {$lte: 10}}).projection({"_id":0, "restaurant_id":1,"name":1, "district":1, "cuisine":1})

17. Write a MongoDB query to find the `restaurant_id`, `name`, `address` and geographical `coord` for those restaurants where 2nd element of `coord` array contains a value which is more than `42` and up to `52`. 

> db.restaurants.find({"address.coord.1": {$gt:42, $lt: 52}}).projection({"_id":0, "restaurant_id":1,"name":1, "address":1, "address.coord":1})

18. Write a MongoDB query to arrange the `name` of the restaurants in ascending order along with all the columns. 

> db.restaurants.find({}).sort({"name": 1}).pretty()

19. Write a MongoDB query to arrange the `name` of the restaurants in descending order along with all the columns. 

> db.restaurants.find({}).sort({"name": -1}).pretty()

20. Write a MongoDB query to arrange the name of the `cuisine` in ascending order and for those same cuisine `district` should be in descending order.

> db.restaurants.find({}).sort({"cuisine": 1, "district": -1}).pretty()

21. Write a MongoDB query which will select all documents in the restaurants collection where the `coord` field value is `Double`.

> db.restaurants.find({"address.coord" :{ $type: "double"}}).sort({"cuisine": 1, "district": -1}).pretty()

22. Write a MongoDB query to find the restaurant `name`, `district`, `longitude` and `latitude` and `cuisine` for those restaurants which contains `'Mad'` as first three letters of its `name`. 
  
> db.restaurants.find({"name": {$regex: "^Mad"}}).projection({"_id":0, "name":1, "district":1, "address.coord":1, "suisine":1 })
  
## Excercise 02
Revisit Homework 07 from yesterday and write down your suggestions to tune your Library application performance. (Use Indexes)  

db.university.createIndex({course: "text"});
db.university.find({$text : {$search: "CS472"}})

## Exercise 03
Write an Express Restful API that uses MongoDB to insert location points as following:
```javascript
{ name, category, location: [longitude, latitude]}
```
* Look for some locations around MUM campus using Google Maps and use `RestClient` to insert them into your MongoDB collection.   
* Add the necessary indexes to search by `location`.
* Write another Restful API that will Find the nearest 3 points to MUM location `(lat: 41.017654, long: -91.9665342)`, your search criteria must include a `category`.
  
*Note that Google Maps will give you coordination as `[Lat, Long]`. While MongoDB requires coordination to be saved as `[Long, Lat]`*
