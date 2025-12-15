import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// ESM PATH RESOLUTION
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLIENT BUILD PATH
const clientBuildPath = path.join(__dirname, '..', 'dist');

// REQUEST BODY PARSING
app.use(express.json());

// STATIC FILE SERVING
app.use(
  express.static(clientBuildPath, {
    index: false,
  })
);

// SPA FALLBACK ROUTE
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// SERVER STARTUP
app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
