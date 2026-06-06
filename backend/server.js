const dotenv = require("dotenv");
dotenv.config(); 

const app = require("./src/app");

const leadRoutes = require("./src/routes/app");
const errorHandler = require("./src/middleware/errorHandler");

app.use("/api/leads", leadRoutes);
app.use(errorHandler);

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});