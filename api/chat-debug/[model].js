// Vercel serverless function to handle OpenAI API requests with debugging (using dynamic routing)
export default async function handler(req, res) {
  console.log('Chat Debug API received a request');
  console.log('Request URL:', req.url);
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);
  
  // Set CORS headers to allow all origins for testing
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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
    // Start timing
    const startTime = Date.now();
    
    // Get the model from the dynamic route parameter
    const { model = 'gpt-3.5-turbo-0125' } = req.query;
    console.log('Model from path:', model);
    
    // Log request body
    console.log('Request body:', req.body);
    
    // Get the request body
    const { messages, max_tokens = 300 } = req.body;
    
    // Validate the request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ 
        error: 'Invalid request: messages array is required',
        receivedBody: req.body,
        endpoint: req.url,
        requestTime: new Date().toISOString()
      });
    }

    // Get the API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'Server configuration error: API key not found',
        environmentVars: {
          hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY),
          nodeEnv: process.env.NODE_ENV
        },
        endpoint: req.url,
        requestTime: new Date().toISOString()
      });
    }

    // Make the request to OpenAI
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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

    // Calculate response time
    const responseTime = Date.now() - startTime;

    // Check if the response is OK
    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error('OpenAI API error:', errorData);
      
      return res.status(openaiResponse.status).json({ 
        error: 'Error from OpenAI API', 
        details: errorData,
        endpoint: req.url,
        requestTime: new Date().toISOString(),
        responseTime: `${responseTime}ms`,
        status: openaiResponse.status,
        requestData: {
          model,
          messagesCount: messages.length,
          max_tokens
        }
      });
    }

    // Parse the response from OpenAI
    const data = await openaiResponse.json();
    
    // Return debug information along with the response
    return res.status(200).json({
      ...data,
      debug: {
        endpoint: req.url,
        requestTime: new Date().toISOString(),
        responseTime: `${responseTime}ms`,
        requestData: {
          model,
          messagesCount: messages.length,
          max_tokens
        },
        environmentInfo: {
          nodeEnv: process.env.NODE_ENV,
          hasOpenAIKey: Boolean(process.env.OPENAI_API_KEY)
        }
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      endpoint: req.url,
      requestTime: new Date().toISOString() 
    });
  }
} 