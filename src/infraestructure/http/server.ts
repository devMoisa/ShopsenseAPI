import express from "express";
import emailRoutes from "../../presentation/routes/emailRoutes";

const app = express();
app.use(express.json());

app.use("/api/emails", emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
