import "dotenv/config";
import express from "express";
import payload from "payload";
import config from "./payload.config.js";

const app = express();

const start = async () => {
  await payload.init({
    config,
    onInit: async () => {
      payload.logger.info("Payload initialized");
      payload.logger.info(`Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(3001, "0.0.0.0", () => {
    payload.logger.info("CMS listening on http://0.0.0.0:3001");
  });
};

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
