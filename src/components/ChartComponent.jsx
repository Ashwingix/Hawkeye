import React from 'react';
import Chart from 'react-apexcharts';

const ChartComponent = ({ options, series, type }) => {
  return <Chart options={options} series={series} type={type} height={350} />;
};

export default ChartComponent;
