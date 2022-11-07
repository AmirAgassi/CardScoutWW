const app = require('express')();
const csv = require('csv-parser');
const fs = require('fs');

const PORT = 8080;
const cors = require('cors');

app.use(cors());
function numberWithSpaces(value, pattern) {
    var i = 0,
      phone = value.toString();
    return pattern.replace(/#/g, _ => phone[i++]);
  }
  

app.get('/', (req,res) => {
    res.status(200).send("Hello!")
})

app.get('/lookup/:bin', (req,res) => {
    var bin = req.params['bin'];
    console.log(bin)
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i]['bin'] == bin) {
            res.status(200).send(data[i])
        }
    }
    res.status(200).send({'bin':bin,'issuer':'card_lookup_error'}) 
})


var data = [];
fs.createReadStream('bank-bins.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });





app.listen(
    PORT,
    () => console.log("It's alive!")
)