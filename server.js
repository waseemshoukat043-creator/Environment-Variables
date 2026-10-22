
const express = require("express");
const config = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: `${config.appName} is running!`,
    port: config.port,
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    environmentVariables: "validated",
  });
});

app.listen(config.port, () => {
  console.log("--------------------------------");
  console.log(`${config.appName} started successfully!`);
  console.log(`Server: http://localhost:${config.port}`);
  console.log(`Health: http://localhost:${config.port}/health`);
  console.log("Environment variables validated.");
  console.log("--------------------------------");
});
