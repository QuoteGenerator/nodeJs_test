const express = require('express');
const app = express();
const port = 3000;

// 👉 Statische Dateien erlauben (HTML, CSS, JS)
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});