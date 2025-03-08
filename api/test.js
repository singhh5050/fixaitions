// Simple test API to verify deployment
export default function handler(req, res) {
  console.log('Test API received a request!');
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);
  
  // Set CORS headers to allow all origins
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
  
  return res.status(200).json({ 
    message: 'API is working!',
    time: new Date().toISOString(),
    method: req.method
  });
} 