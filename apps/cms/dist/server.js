import payload from "payload";
import config from "./payload.config.js";
const start = async () => {
    await payload.init({
        config,
        onInit: () => {
            payload.logger.info("Payload initialized");
        },
    });
};
start();
