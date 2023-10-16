// getLastCommitTimestamp.js
const { execSync } = require('child_process');
const fs = require('fs');

const lastCommitTimestamp = execSync('git log -1 --format=%cd --date=iso')
  .toString()
  .trim();

fs.writeFileSync('public/lastCommitTimestamp.txt', lastCommitTimestamp);
