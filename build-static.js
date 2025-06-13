const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a custom next.config.js for static export
console.log('Creating custom next.config.js for static export...');
const originalConfig = fs.readFileSync('next.config.mjs', 'utf8');
const tempConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'mams.com.ng'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  distDir: 'out',
  // Configure for static export
  experimental: {},
  // Ensure trailing slashes are used for static export
  trailingSlash: true,
  // Skip API routes for static export
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  // Exclude API routes from the build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

export default nextConfig
`;

fs.writeFileSync('next.config.mjs.bak', originalConfig, 'utf8');
fs.writeFileSync('next.config.mjs', tempConfig, 'utf8');

try {
  // Build the application
  console.log('Building the application...');
  execSync('next build', { stdio: 'inherit' });

  // Create a _redirects file for Netlify
  console.log('Creating Netlify _redirects file...');
  const redirectsContent = `
# Handle Next.js static assets
/_next/static/*  /static/:splat  200

# Handle client-side routing for all pages
/*  /index.html  200

# Ensure 404 page is served for non-existent routes
/*  /404.html  404
`;
  fs.writeFileSync('out/_redirects', redirectsContent.trim(), 'utf8');

  // Create a netlify.toml file in the out directory
  console.log('Creating netlify.toml in the out directory...');
  const netlifyTomlContent = `
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = true
`;
  fs.writeFileSync('out/netlify.toml', netlifyTomlContent.trim(), 'utf8');

  console.log('Static build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
} finally {
  // Restore the original next.config.js
  console.log('Restoring original next.config.js...');
  fs.copyFileSync('next.config.mjs.bak', 'next.config.mjs');
  fs.unlinkSync('next.config.mjs.bak');
}
