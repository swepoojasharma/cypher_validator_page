import http from "http";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from './routes/index.js';
import { MONGODB_URL, PORT } from "./config/env.config.js";

const app = express();
const httpServer = http.Server(app);

app.use(cors({ origin: '*'}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));

app.use('/api/validator', router);
app.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Cypher Validator APIs Working'
  })
});

/********** DB Connection ***********/
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    httpServer.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch(error => console.error('MongoDB connection error:', error));