const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const MONGO_URI =
  "mongodb://bbs:bbs123456@cluster0-shard-00-00-4fet1.mongodb.net:27017,cluster0-shard-00-01-4fet1.mongodb.net:27017,cluster0-shard-00-02-4fet1.mongodb.net:27017/employeedata?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
require('./Employee');

app.use(bodyParser.json());

const Employee = mongoose.model('Employee');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).catch(err => console.log(err));

mongoose.connection.on("connected", () => {
  console.log("connected to database!!!");
});


app.get('/',(req, res) => {
    Employee.find({})
    .then(response => {
      res.json(response);
    }).catch(err => {
      console.log(err);
      res.json({error: err.message});
    })
});

app.post('/post-data', (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    picture: req.body.picture,
    salary: req.body.salary
  });
  employee.save()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({error: err.message});
    })
})

app.post('/delete-data', (req, res) => {
  Employee.findOneAndDelete({_id: req.body._id})
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({error: err.message});
    })
});



app.post('/update-data',(req, res) => {
  Employee.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    picture: req.body.picture,
    salary: req.body.salary
  },{new: true}).then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    console.log(err);
    res.json({error: err.message});
  })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


