import express from "express";
import "dotenv/config";
import cors from "cors";
import picRoutes from "./routes/pictures.js";
const app = express();

app.use(express.json());
app.use(cors());

// app.use('/pictures', express.static(path.join(__dirname, 'pictures')));
app.use(express.static("public"));

// Endpoint to check if the server is running
app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.use("/pics", picRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
