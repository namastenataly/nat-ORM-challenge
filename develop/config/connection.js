require("dotenv").config();
const { Sequelize } = require("sequelize");

console.log("DB_USER:", process.env.DB_USER || "NOT SET");
console.log("DB_PASSWORD:", JSON.stringify(process.env.DB_PASSWORD));
console.log("DB_NAME:", process.env.DB_NAME || "NOT SET");
console.log("DB_HOST:", process.env.DB_HOST || "NOT SET");
console.log("DB_PORT:", process.env.DB_PORT || "NOT SET");

// Stop execution if DB_PASSWORD is not a string
if (!process.env.DB_PASSWORD || typeof process.env.DB_PASSWORD !== "string") {
  console.error("🚨 ERROR: DB_PASSWORD is not set or is not a string.");
  process.exit(1);
}

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
