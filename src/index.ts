import express, { Express, query, Request, Response } from "express";
import dotenv from "dotenv";
import connectDb from "./connectDb";
// import { QueryParam } from "../types/QueryParam";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

app.get("/universities", (req: Request, res: Response) => {
  const query = req.query;
  const sort: any = {};
  if(typeof query.sort === "string"){
    const splitted : string[] = query.sort.split(":")
    sort[splitted[0]] = splitted[1];
  }
  delete query.sort;
  if(req.query.id) query.id = req.query.id;
  connectDb({ collectionName: "universities", res, crudOperation: "get", query, sort});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
