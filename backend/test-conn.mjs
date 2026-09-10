import mongoose from "mongoose";

const uri = "mongodb+srv://ahmedwahad49_db_user:MEfvQdbskcrogfqD@cluster0.k2rlefq.mongodb.net/drivevital?retryWrites=true&w=majority&appName=Cluster0";

console.log("🔗 Connecting to Atlas cluster0.k2rlefq...");

mongoose.connect(uri, { serverSelectionTimeoutMS: 20000 })
  .then(() => {
    console.log("✅ SUCCESS — MongoDB Atlas connected!");
    console.log("   Host:", mongoose.connection.host);
    console.log("   DB:  ", mongoose.connection.db.databaseName);
    process.exit(0);
  })
  .catch(err => {
    console.log("❌ FAILED:", err.message);
    process.exit(1);
  });
