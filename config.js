
require("dotenv").config();

const requiredVariables = ["PORT", "JWT_SECRET", "APP_NAME"];

const missingVariables = requiredVariables.filter((key) => {
  const value = process.env[key];
  return !value || value.trim() === "";
});

if (missingVariables.length > 0) {
  console.error(
    "ERROR: Missing environment variables:",
    missingVariables.join(", ")
  );
  process.exit(1);
}

const port = Number(process.env.PORT);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("ERROR: Invalid PORT value.");
  process.exit(1);
}

const config = {
  port: port,
  jwtSecret: process.env.JWT_SECRET,
  appName: process.env.APP_NAME.trim(),
};

module.exports = config;
