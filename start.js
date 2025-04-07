#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

// Use 'serve' to serve the package directory
const servePath = path.join(__dirname);

// Run static server
exec(`npx serve "${servePath}"`, (err, stdout, stderr) => {
    if (err) {
        console.error('Error starting the quiz:', err);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
