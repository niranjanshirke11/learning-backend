require("dotenv").config();
const app = require("./src/app");
const Connectdb = require("./src/db/db");


// Basic error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

(async () => {
    try {
        await Connectdb();
        console.log("Database connection established...");
        app.listen(4000, () => {
            console.log("Server listening on port=4000");
        });
    } catch (err) {
        console.error("Database Connection Failed", err);
    }
})();