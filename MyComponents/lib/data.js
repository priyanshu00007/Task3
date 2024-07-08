// pages/api/data.js
export default function handler(req, res) {
    res.status(200).json({
      name: "Global Price Index of All Commodities",
      interval: "monthly",
      unit: "index 2016=100",
      data: [
        { date: "2024-05-01", value: "169.438556049368" },
        { date: "2024-04-01", value: "170.460374997652" },
        { date: "2024-03-01", value: "163.075985135962" },
        { date: "2024-02-01", value: "158.634377947471" },
        { date: "2024-01-01", value: "159.312292250705" },
        { date: "2023-12-01", value: "159.538363227803" },
        { date: "2023-11-01", value: "165.138261723492" },
        { date: "2023-10-01", value: "167.909337962592" },
        { date: "2023-09-01", value: "168.607096444481" },
      ],
    });
  }
  