// Vercel serverless function to test environment variables
export default function handler(req, res) {
  try {
    // Check if we can access environment variables
    const hasOpenAIKey = !!process.env.OPENAI_API_KEY;
    
    // Return sanitized information (don't expose the actual key)
    return res.status(200).json({
      environment: process.env.VERCEL_ENV || 'unknown',
      hasOpenAIKey: hasOpenAIKey,
      openAIKeyLength: hasOpenAIKey ? process.env.OPENAI_API_KEY.length : 0,
      openAIKeyPrefix: hasOpenAIKey ? process.env.OPENAI_API_KEY.substring(0, 7) + '...' : null,
      nodeVersion: process.version,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Environment test error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 