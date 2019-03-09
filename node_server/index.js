const express = require('express')
const app = express();
var customer = require('./src/customer');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/customer/full', (req, res) => {
  res.send(
    {full_name: customer.getter.getFullName()});
});

app.get('/customer/first', (req, res) => {
  res.send(
    {full_name: customer.getter.getFirstName()});
});

app.get('/customer/last', (req, res) => {
  res.send(
    {full_name: customer.getter.getLastName()});
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});