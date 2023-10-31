const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware and static files setup here

app.use(express.urlencoded({ extended: false }));

// Route modules
const machineryRoutes = require("./routes/machineryRoutes");
const liburRoutes = require("./routes/liburRoutes");
const nonTestingRoutes = require("./routes/nonTestingRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");

// Use route modules
app.use("/machinery", machineryRoutes);
app.use("/libur", liburRoutes);
app.use("/nontesting", nonTestingRoutes);
app.use("/user", userRoutes);
app.use("/resetpassword", passwordResetRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
