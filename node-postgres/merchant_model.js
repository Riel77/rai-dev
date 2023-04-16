const Pool = require("pg").Pool;
const pool = new Pool({
  user: "doadmin",
  host: "rai-dev-db-do-user-6015580-0.b.db.ondigitalocean.com",
  database: "counter",
  password: "AVNS_-9sh-ZnQrYT-FlRgtYx",
  port: 25060,
});

const getMerchants = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM visitor", (error, results) => {
      if (error) {
        reject(error);
      }
      console.log(results.rows);
    });
  });
};
const createMerchant = (body) => {
  return new Promise(function (resolve, reject) {
    const { CountID, Count } = body;
    pool.query(
      "INSERT INTO visitor VALUES ($1, $2) RETURNING *",
      [CountID, Count],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`);
      }
    );
  });
};
const deleteMerchant = () => {
  return new Promise(function (resolve, reject) {
    const CountID = parseInt(request.params.id);
    pool.query(
      "DELETE FROM visitor WHERE countid = $1",
      [CountID],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`visitor deleted with ID: ${CountID}`);
      }
    );
  });
};

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
};
