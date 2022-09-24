import { Response } from "express";

type ConnectDb = {
  collectionName: string;
  res: Response;
  crudOperation: Crud;
  query: {};
  sort: {};
};
