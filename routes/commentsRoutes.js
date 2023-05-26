const express = require("express");
const axios = require("axios");

const router = express.Router();

router.route("/").get((req,res) => {
    axios.get('https://test.wandumimedia.co.za/public/api/v1/comments').then(result => {
    const headerData = result.headers && result.headers.date ? result.headers.date : "No response date";
    console.log("Status Code: ", result.status);
    console.log("Data from the API: ", headerData);

    const comments = result.data;

    console.log(comments);

    res.status(200).json({ comments });


    }).catch(err => {
        console.log('Error: ', err.message);
    })
    
});

module.exports = router;