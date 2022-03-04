const express = require('express')
const app = express()
app.use(express.json())
const _ = require('lodash');
const PORT = 3000
const LOCATION = ["NA", "EMEA", "APAC", "LAD"];
const CLEARANCE = ["HQ", "SECRET", "TOP-SECRET"];

app.get('/badgeLookup', (req, res) => {
  const response = badgeLookup(req.query);
  res.send(response);
})

app.post('/badgeLookup', (req, res) => {
  const response = badgeLookup(req.body);
  res.send(response);
})

// for this example, we are generating a random badge number on the fly
// this could be from your internal data systems
function badgeLookup(requestBody){
  const badge = requestBody.employeeNumber +"_"+ _.sample(LOCATION) +"_"+ _.sample(CLEARANCE);
  return { badge: badge };
}

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)  
})