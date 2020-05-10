"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 8081;
app_1.app.listen(port, () => console.log(`Prox-e app listening at http://localhost:${port}`));
