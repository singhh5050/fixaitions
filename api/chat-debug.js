// Debug version of the chat API endpoint with enhanced error reporting
export default async function handler(req, res) {
  // Add CORS headers for testing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      method: req.method,
      allowedMethods: ['POST']
    });
  }

  try {
    // Log request details
    console.log('Request received:', {
      headers: req.headers,
      method: req.method,
      url: req.url
    });

    // Get the request body
    const { messages, model = 'gpt-3.5-turbo-0125', max_tokens = 300 } = req.body;

    // Log parsed request body
    console.log('Request body parsed:', { 
      messageCount: messages?.length,
      model,
      max_tokens
    });

    // Validate the request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request: messages array is required',
        receivedBody: req.body
      });
    }

    // Get the API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'Server configuration error: API key not found',
        environmentVars: {
          nodeEnv: process.env.NODE_ENV,
          vercelEnv: process.env.VERCEL_ENV
        }
      });
    }

    // Log that we're about to make the OpenAI request
    console.log('Making request to OpenAI API');

    // Make the request to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens
      })
    });

    // Log the response status
    console.log('OpenAI API response status:', response.status);

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { rawError: errorText };
      }
      
      console.error('OpenAI API error:', errorData);
      
      return res.status(response.status).json({ 
        error: 'Error from OpenAI API', 
        status: response.status,
        details: errorData,
        apiKeyPrefix: apiKey.substring(0, 7) + '...',
        apiKeyLength: apiKey.length
      });
    }

    // Parse the response
    const data = await response.json();
    console.log('OpenAI API response received successfully');

    // Return the response from OpenAI
    return res.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 