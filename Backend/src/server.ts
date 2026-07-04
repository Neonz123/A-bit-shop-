import app from "./app";
import { AppDataSource } from "./data-source";

const PORT = 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Data Source initialized");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error during Data Source initialization:", err);
  });
