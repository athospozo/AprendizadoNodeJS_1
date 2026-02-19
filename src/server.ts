import { app } from "./app.js";

const host = "0.0.0.0"; //garante que seja acessivel para frontends
const port = 3333; //ou 3000

app
  .listen({
    host,
    port,
  })
  .then(() => {
    const url = `http://localhost:${port}`;
    console.log(`HTTP server running at: ${url}`);
  });
