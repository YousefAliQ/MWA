const express = require('express');
const rxjs = require('rxjs');
const request = require('superagent');
const {
  map
} = require('rxjs/operators');
const {
  filter
} = require('rxjs/operators');

const app = express();

app.set('x-powered-by', false);
app.set('strict routing', true);
app.set('case sensitive routing', true);
app.set('Etag', 'If-None-Match')

app.get('/users', async (req, res) => {

  res.set('Cache-Control', 'private, max-age=68400');
  console.log(req.query.page)
  var pageNum = parseInt(req.query.page || 0);
  var perPage = parseInt(req.query.per_page || 10);

  const r = await request
    .get('https://randomuser.me/api/?page=' + pageNum + '&results=10&seed=abc')

  const users = r.body.results
    .map(Obj => Obj.name)
    .map(name => JSON.stringify({
      'first-name': name.first,
      'last-name': name.last
    }, null, ' '));
  res.links({
    //static URL for testing. not a good practice. 
    next: "http://localhost:3000/users?page=" + (pageNum + 1)
  });
  res.set("X-Total-Count", users.length);
  res.json(users);
})
app.listen(3000, () => {
  console.log('ready on 3000')
})