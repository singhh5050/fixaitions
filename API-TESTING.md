# API Testing Tools

This directory contains several tools to help diagnose and test the OpenAI API integration.

## Test Pages

### 1. API Test Suite (`api-test.html`)

A comprehensive test suite that checks various aspects of the API functionality:

- **Basic Server Connection**: Tests if the server is reachable
- **API Endpoint Existence**: Checks if the `/api/chat` endpoint exists
- **API Request Format**: Tests if the API accepts properly formatted requests
- **Environment Variables**: Tests if the API can access environment variables
- **OpenAI API Connection**: Tests if the server can connect to OpenAI API

**Usage**: Open `api-test.html` in your browser and click the "Run Test" button for each test.

### 2. Chat Debug Test (`chat-debug.html`)

A simple chat interface with detailed debugging information:

- Shows request and response details
- Allows switching between regular and debug API endpoints
- Displays timing information and error details

**Usage**: Open `chat-debug.html` in your browser, type a message, and click "Send".

## API Endpoints

### 1. Regular Chat API (`/api/chat.js`)

The main API endpoint used by the website.

### 2. Debug Chat API (`/api/chat-debug.js`)

An enhanced version of the chat API with:
- Detailed error reporting
- CORS headers for testing
- Environment variable information
- API key validation details

### 3. Environment Test API (`/api/env-test.js`)

Tests if environment variables are properly set:
- Checks for the existence of the OpenAI API key
- Returns information about the environment
- Does not expose the actual API key

### 4. OpenAI Test API (`/api/openai-test.js`)

Tests the connection to the OpenAI API:
- Makes a minimal request to the OpenAI API
- Verifies that the API key is valid
- Returns success or detailed error information

## Troubleshooting Steps

If you're experiencing issues with the API, follow these steps:

1. **Check Environment Variables**:
   - Make sure `OPENAI_API_KEY` is set in Vercel
   - Ensure the API key is valid and not surrounded by quotes

2. **Verify API Endpoint Existence**:
   - Use the API Test Suite to check if the endpoint exists
   - Check Vercel logs for deployment issues

3. **Test OpenAI API Connection**:
   - Use the OpenAI Test API to verify the connection
   - Check for any rate limiting or authentication issues

4. **Debug Request Format**:
   - Use the Chat Debug Test to see detailed request/response information
   - Verify that the request format matches the OpenAI API requirements

5. **Check Vercel Configuration**:
   - Ensure `vercel.json` is properly configured
   - Verify that the API directory is included in the deployment

## Common Issues

1. **404 Not Found**:
   - The API endpoint might not be deployed correctly
   - Check if the `/api` directory is included in your Vercel deployment

2. **401 Unauthorized**:
   - The OpenAI API key might be invalid or improperly formatted
   - Make sure the key is not surrounded by quotes in the environment variable

3. **CORS Issues**:
   - Use the debug API endpoint which includes CORS headers
   - Check browser console for specific CORS error messages

4. **Rate Limiting**:
   - OpenAI might be rate limiting your requests
   - Check the response for rate limit information 