import { app } from "./app";

const port = process.env.PORT || 8081;

app.listen(port, () =>
  console.log(`Prox-e app listening at http://localhost:${port}`)
);