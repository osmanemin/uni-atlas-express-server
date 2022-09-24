import { MongoClient } from "mongodb";
import { ConnectDb } from "../types/ConnectDb";
import dotenv from "dotenv";
import findData from "./crudOperations/fiind";

dotenv.config();
const dbUrl = process.env.MONGODB_URL || "";
const dbName = process.env.DB_NAME || "";

const connectDb = ({
  collectionName,
  res,
  crudOperation,
  query,
  sort,
}: ConnectDb) => {
  MongoClient.connect(dbUrl, (err, db) => {
    if (err) throw err;
    else if (db) {
      const dbo = db.db(dbName);
      if (dbo) {
        switch (crudOperation) {
          case "get":
            findData({ query, db, dbo, res, collectionName, sort });
            break;
        }
      } else throw "=========== bdo is undefined =============";
    }
  });
};

export default connectDb;
