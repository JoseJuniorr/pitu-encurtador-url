import express from "express";

import LinksRouter from "./routes/links.routes";

const app = express();

//Configurações
app.set("port", process.env.PORT || 4000);

app.use(express.json());

app.use(LinksRouter);

export default app;
