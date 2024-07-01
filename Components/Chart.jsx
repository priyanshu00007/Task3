import React from 'react';
import ChartComponent from "./chartcomponent"

const HomePage = () => {
  return (
    <div  >
      <h1  className='flex justify-center  text-4xl'>My Stock Chart</h1>
      <div id="chart"  className='flex justify-center  text-4xl'>
        <ChartComponent/>
      </div>
    </div>
  );
};

export default HomePage;
