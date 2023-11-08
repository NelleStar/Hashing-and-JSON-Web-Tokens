require("dotenv").config();

const dbUsername = process.env.PGUSER;
const dbPassword = process.env.PGPASSWORD;
const dbName = "express_auth"; // Modify the database name accordingly

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = `postgresql://${dbUsername}:${dbPassword}@localhost:5432/${dbName}_test`;
} else {
  DB_URI = `postgresql://${dbUsername}:${dbPassword}@localhost:5432/${dbName}`;
}

const SECRET_KEY = process.env.SECRET_KEY || "secret";
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}