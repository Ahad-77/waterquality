const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const industriesRouter = require('./routes/Industries');
const violationRouter = require('./routes/Violations');
const sensorsDataRouter = require('./routes/sensorsData');


app.use('/Industries', industriesRouter);
app.use('/Violations', violationRouter);
app.use('/SensorsData', sensorsDataRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});