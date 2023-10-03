// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function readJsonFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
}

// Define a mapping of JSON endpoints to file paths
const jsonEndpoints = {
  '/data/workExperience.json': path.join(
    __dirname,
    'data',
    'workExperience.json'
  ),
  '/data/portfolio.json': path.join(__dirname, 'data', 'portfolio.json'),
  // Add more JSON endpoints as needed
};

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // Check if the requested URL is a known JSON endpoint
    if (jsonEndpoints[pathname]) {
      // Set the Content-Type header to application/json
      res.setHeader('Content-Type', 'application/json');

      // Read and send the JSON data for the requested endpoint
      const jsonFilePath = jsonEndpoints[pathname];
      const jsonData = readJsonFile(jsonFilePath);

      if (jsonData) {
        // Send the JSON data
        res.end(JSON.stringify(jsonData));
      } else {
        // Respond with an error if the JSON data couldn't be read
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read JSON data' }));
      }
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
