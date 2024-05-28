const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/commerce', require('./routes/routes_commerce'));

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});