import React from 'react';
import { Box, Grid } from '@mui/material';
import ChartComponent from './ChartComponent';

const MainPage = () => {
  const lineChartOptions = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const lineChartSeries = [
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const barChartOptions = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const barChartSeries = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
    },
  ];

  const pieChartOptions = {
    chart: {
      id: 'pie-chart',
    },
    labels: ['A', 'B', 'C', 'D'],
  };

  const pieChartSeries = [44, 55, 13, 43];

  const areaChartOptions = {
    chart: {
      id: 'area-chart',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const areaChartSeries = [
    {
      name: 'series-1',
      data: [20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <Grid item xs={12} sm={6} sx={{ height: '50%' }}>
          <ChartComponent options={lineChartOptions} series={lineChartSeries} type="line" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: '50%' }}>
          <ChartComponent options={barChartOptions} series={barChartSeries} type="bar" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: '50%' }}>
          <ChartComponent options={pieChartOptions} series={pieChartSeries} type="pie" />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: '50%' }}>
          <ChartComponent options={areaChartOptions} series={areaChartSeries} type="area" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
