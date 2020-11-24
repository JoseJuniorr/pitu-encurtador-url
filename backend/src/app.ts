import express from "express";

import LinksRouter from "./routes/links.routes";

import cors from "cors";

const app = express();

//Configurações
app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(cors());
app.use(LinksRouter);

export default app;
