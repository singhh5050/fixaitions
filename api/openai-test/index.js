// OpenAI API test endpoint
export default async function handler(req, res) {
  // Set CORS headers to allow all origins for testing
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Start timing
    const startTime = Date.now();
    
    // Get the API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        success: false, 
        error: 'API key not found',
        message: 'The OPENAI_API_KEY environment variable is not set or is empty.'
      });
    }

    // Make a simple request to OpenAI's API to verify the key
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Calculate response time
    const responseTime = Date.now() - startTime;

    // Check response
    if (response.ok) {
      const data = await response.json();
      return res.status(200).json({
        success: true,
        message: 'Successfully connected to OpenAI API',
        models: data.data.slice(0, 5).map(model => model.id), // Just return a few models to verify
        responseTime: `${responseTime}ms`
      });
    } else {
      const errorText = await response.text();
      return res.status(response.status).json({
        success: false,
        statusCode: response.status,
        error: 'Failed to connect to OpenAI API',
        message: errorText,
        responseTime: `${responseTime}ms`
      });
    }
  } catch (error) {
    console.error('OpenAI test error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error', 
      message: error.message
    });
  }
} 