import express from "express";
const app = express();

app.use(static(__dirname + '/build'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/build/index.html');
});

app.listen(process.env.PORT || 8080);