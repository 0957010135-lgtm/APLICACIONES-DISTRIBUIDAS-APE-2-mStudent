require('dotenv').config();
const express = require('express');
const studentRoutes = require('./routes/student.routes');

const app = express();
app.use(express.json());
app.use(studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`mStudent corriendo en puerto ${process.env.PORT}`);
});
