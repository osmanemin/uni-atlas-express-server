import { Response } from "express";
import { Db, MongoClient } from "mongodb";

type FindOperation = {
  db: MongoClient;
  dbo: Db;
  res: Response;
  collectionName: string;
  sort: {};
  query: {};
};
