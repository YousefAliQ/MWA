# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
setTimeout will pushed to the timer queue. But setImmediate is faster because its pushed 
to the check and it doesn't execute a queue of functions but checks the I/O event handlers and 
execute the callbacks immediatly. 
 
2. Explain the difference between `process.nextTick` and `setImmediate`?
setImmediate will go to the check queue and executed during the tick loop. 
But process.nextTick pushed to a special high-priority queue and the event loop
will jump to this queue directly and start executing. For example, this is useful in failuar
cases.

3. Name 10 core modules that Node provides by default.

1. assert : this module will help you sleep at night! because your code is tested. 
```ex: assert(5 > 7);
```

2. cluster : this module for creating child processes to take advantage of computer multi-core systems.
             Noting that each child proceess working on its own single thread.
```ex: cluster.fork();
``` 

3. crypto : To handle OpenSSL cryptographic functions.
```ex: crypto.createDecipher('aes-128-cbc', 'mypassword');
```

4. events : To handle events
5. timers : To execute a function after a given number of milliseconds
6. fs     : To handle the file system
7. net    : To create servers and clients
8. querystring : To handle URL query strings
9. stream : To handle streaming data
10. readline : 	To handle readable streams one line at the time

## Exercise 02
Complete the necessary Node code to make `pluck(value)` method work asynchronously, pluck will return a new array after removing the value.  
```javascript

Array.prototype.pluck = function(pluck){
setTimeout(() => {
    console.log(this.filter(n=>n!=pluck));
},0);
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]
```
**Practice:** Try to solve the exercise in many ways, especially using the `Promise` object.
