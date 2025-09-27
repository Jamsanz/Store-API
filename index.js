require('dotenv').config();
const app = require('express')();
const PORT = process.env.PORT || 9000;
const mongoose = require('mongoose');
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = YAML.load("./swagger.yml");

app.use(require('cors')());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(require('express').json());
app.use('/users', require('./users/routes'));
app.use('/products', require('./products/routes'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
