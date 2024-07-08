"use client";
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=ALL_COMMODITIES&interval=monthly&apikey=demo');
        const data = await response.json();

        console.log(data);

        if (data && data.data) {
          const processedData = data.data.map(item => ({
            date: item.date,
            value: parseFloat(item.value.replace('k', '')) * 1000 // Convert '170k' to 170000
          }));

          setChartData(processedData);
        } else {
          console.error('Unexpected data structure:', data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.map(item => new Date(item.date).getTime())
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      },
      y: {
        formatter: function (val) {
          return val.toFixed(2); 
        }
      }
    }
  };

  const series = [
    {
      name: 'Global Price Index',
      data: chartData.map(item => item.value)
    }
  ];

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Chart options={options} series={series} type="line" width="100%" height="350px" />
      )}
    </div>
  );
};

export default ChartComponent;
