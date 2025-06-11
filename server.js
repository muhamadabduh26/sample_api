const express = require("express");
const path = require("path");
const nasabahApi = require("./api");

const app = express();
const port = process.env.PORT || 3000;

// Jalankan API route
app.use("/api", nasabahApi);

// Untuk serve static files hasil build Vite
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
