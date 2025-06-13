const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure we're in production mode
process.env.NODE_ENV = 'production';
process.env.NEXT_PUBLIC_SITE_URL = 'https://mams.com.ng';

console.log('Starting Netlify build process...');

// Run Next.js build and export
console.log('Building Next.js application...');
execSync('npm run build', { stdio: 'inherit' });

// Create _redirects file in the out directory
console.log('Creating Netlify _redirects file in the out directory...');
const redirectsContent = `
# Netlify redirects file

# Handle Next.js static assets
/_next/*  /_next/:splat  200

# Handle all routes - SPA fallback
/*  /index.html  200
`;

fs.writeFileSync('out/_redirects', redirectsContent.trim(), 'utf8');

// Copy netlify.toml to the out directory
console.log('Copying netlify.toml to the out directory...');
const netlifyTomlContent = fs.readFileSync('netlify.toml', 'utf8');
fs.writeFileSync('out/netlify.toml', netlifyTomlContent, 'utf8');

console.log('Netlify build completed successfully!');
