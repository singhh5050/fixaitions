// Vercel serverless function to test OpenAI API connection
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'Server configuration error', 
        message: 'API key not found in environment variables'
      });
    }

    // Make a minimal request to OpenAI to test the connection
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return res.status(response.status).json({ 
        error: 'Error from OpenAI API', 
        status: response.status,
        details: errorData 
      });
    }

    // Return success with minimal data
    const data = await response.json();
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully connected to OpenAI API',
      modelCount: data.data ? data.data.length : 'unknown'
    });
  } catch (error) {
    console.error('OpenAI test error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 