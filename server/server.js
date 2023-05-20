import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      restaurant: ["McDonalds", "Wendys"],
    },
  });
});

// Get Individual Restaurants
app.get("/api/v1/restaurants/:id", (req, res) => {
  res.status(200).json({
    status: "Success",
    data: ["Get One Dummy"],
  });
});

// Create a Restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "Success",
    data: ["Post Dummy"],
  });
});

// Update Restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "Success",
    data: ["Dummy"],
  });
});

//Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "Deleted",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
});
