import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const quotes = [
  "Small progress is still progress.",
  "Finish one topic today; confidence follows.",
  "Consistency turns effort into evidence.",
  "Your streak is a promise kept to yourself."
];

app.get("/api/quote", (_request, response) => {
  const index = new Date().getDate() % quotes.length;
  response.json({ quote: quotes[index] });
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "mock-learning-api" });
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}`);
});
