const express = require('express');
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/comments", require("./routes/commentsRoutes"));

app.listen(PORT, () => {
    console.log(`Server is runnign on port ${PORT}`);
});