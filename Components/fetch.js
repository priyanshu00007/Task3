// pages/api/fetchData.js
import axios from 'axios';

export default async function handler(req, res) {
  const url = `https://www.alphavantage.co/query?function=ALL_COMMODITIES&interval=monthly&apikey=demo`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    // Process the data as needed
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Alpha Vantage:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
