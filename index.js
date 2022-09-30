const express = require('express');
const app = express();

app.get("/",(req,resp)=>{
    resp.send('Back-end Setup Done');
});
app.listen(5000);