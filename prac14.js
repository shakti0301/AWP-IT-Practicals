const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1 minute
  })
);

app.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }

  res.send(`
    <h1>Session Cookie Demo</h1>
    <p>You have visited this page <strong>${req.session.views}</strong> times.</p>
    <p>Refresh the page to see the count increase.</p>
  `);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
