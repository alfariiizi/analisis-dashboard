#!/usr/bin/env node

/**
 * Script to download OpenAPI JSON from backend
 * Usage: pnpm get:openapi
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Load environment variables from .env file
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_URL;
const OUTPUT_FILE = path.join(__dirname, "..", "openapi.json");

if (!BACKEND_URL) {
  console.error("❌ Error: BACKEND_URL is not defined in .env file");
  console.error("Please add BACKEND_URL to your .env file, for example:");
  console.error("BACKEND_URL=http://localhost:8080");
  process.exit(1);
}

const openApiUrl = `${BACKEND_URL}/openapi.json`;

console.log(`📥 Downloading OpenAPI schema from: ${openApiUrl}`);

// Determine which protocol to use
const protocol = openApiUrl.startsWith("https") ? https : http;

protocol
  .get(openApiUrl, (response) => {
    // Handle redirects
    if (response.statusCode === 301 || response.statusCode === 302) {
      console.log(`↪️  Following redirect to: ${response.headers.location}`);
      const redirectProtocol = response.headers.location.startsWith("https") ? https : http;

      redirectProtocol
        .get(response.headers.location, (redirectResponse) => {
          handleResponse(redirectResponse);
        })
        .on("error", handleError);

      return;
    }

    handleResponse(response);
  })
  .on("error", handleError);

function handleResponse(response) {
  if (response.statusCode !== 200) {
    console.error(`❌ Error: Server responded with status code ${response.statusCode}`);
    console.error(`URL: ${openApiUrl}`);
    process.exit(1);
  }

  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    try {
      // Validate JSON
      const json = JSON.parse(data);

      // Write to file with pretty formatting
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(json, null, 2), "utf8");

      console.log(`✅ OpenAPI schema downloaded successfully!`);
      console.log(`📁 Saved to: ${OUTPUT_FILE}`);
      console.log(`📊 Schema info:`);
      console.log(`   - OpenAPI version: ${json.openapi || json.swagger || "unknown"}`);
      console.log(`   - Title: ${json.info?.title || "unknown"}`);
      console.log(`   - Version: ${json.info?.version || "unknown"}`);
      console.log(`   - Paths: ${Object.keys(json.paths || {}).length}`);
      console.log("");
      console.log('💡 Next step: Run "pnpm generate:api" to generate TypeScript client');
    } catch (error) {
      console.error(`❌ Error: Invalid JSON response from server`);
      console.error(error.message);
      process.exit(1);
    }
  });
}

function handleError(error) {
  console.error(`❌ Error downloading OpenAPI schema:`);
  console.error(error.message);
  console.error("");
  console.error("Possible issues:");
  console.error("1. Backend server is not running");
  console.error("2. BACKEND_URL in .env is incorrect");
  console.error("3. Network connectivity issues");
  console.error("4. Backend does not serve OpenAPI schema at /openapi.json");
  process.exit(1);
}
