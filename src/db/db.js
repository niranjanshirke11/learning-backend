const mongoose = require("mongoose");

async function Connectdb() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect("mongodb://new-admin1:V0RDAgHQgfgrzDQO@ac-fzuhqzt-shard-00-00.s7kgn8f.mongodb.net:27017/helley?ssl=true&authSource=admin");
        // await mongoose.connect("mongodb+srv://new-admin1:V0RDAgHQgfgrzDQO@cluster0.s7kgn8f.mongodb.net/helley-1");
        console.log("✅ Connected to database successfully");
    } catch (err) {
        console.error("❌ DB Connection Failed:", err.message);
    }
}

module.exports = Connectdb;

if (require.main === module) {
    Connectdb();
}
