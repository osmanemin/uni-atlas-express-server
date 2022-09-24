import { FindOperation } from "../../types/FindOperation";

const findData = ({
  query,
  db,
  dbo,
  res,
  collectionName,
  sort,
}: FindOperation) => {
  dbo
    .collection(collectionName)
    .find(query)
    .sort(sort)
    .toArray((err, result) => {
      if (err) throw err;
      db.close();
      let data;
      if (result && result.length === 1) data = result[0];
      else data = result;
      res.send(data);
    });
};

export default findData;
