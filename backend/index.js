const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const express = require("express");
const cors =require("cors")

const app = express();
app.use(cors())
app.use(express.json());

// Initialize Gemini Model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// AI response function
async function generate(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  }
   catch (err) {
    console.error(err);
    return "Error generating content";
  }
}

// Root route
app.get("/", (req, res) => {
  res.send("Hello! Gemini is live 🔥");
});

// Chat route (POST)
app.post("/api/chat", async (req, res) => {

  try {
    console.log("Received request:", req.body);
    const data = req.body.message;
    const result = await generate(data);
    res.json({ reply: result });
  } 
  catch (err) {
    res.status(500).json({ error: "Failed to generate content" });
  }
});

// Server start
app.listen(3000, () => {
  console.log("Server running at port 3000");
});
