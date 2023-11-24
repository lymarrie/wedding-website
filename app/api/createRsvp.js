// pages/api/save-rsvp.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      // Implement logic to save data to your chosen database
      // Example: You can use MongoDB with the `mongodb` package
      // or any other database of your choice
  
      // For example, if you want to log the data for now
      console.log('RSVP Data:', data);
  
      res.status(200).json({ success: true });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  