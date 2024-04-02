const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000 ;

app.use("/api/contacts", require("../contact-management-app/routes/contactRoutes"))

app.listen(port, () => {
    console.log(`App runs on port ${port}`)
})