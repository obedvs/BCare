'use client'

import { useEffect, useRef } from 'react';
import { Chart, registerables, CategoryScale, LinearScale, BarController, BarElement} from 'chart.js';
import 'chartjs-plugin-datalabels';

import '@/css/additional-styles/barChart.css'


export const StatisticsChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement);
    Chart.register(...registerables);

    if (chartRef.current){
      const ctx = chartRef.current.getContext('2d');
      if (ctx){
        const options = {
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              offset: 0,
              color: 'black',
              font: {
                size: 6,
              },
              formatter: (value, context) => value, // Display the value of each bar as the label
            },
          },
          scales: {
            x: {
              // categoryPercentage: 1,
              // display: false, // Hide x-axis
            },
            y: {
              display: true, // Hide y-axis
              ticks: {
                font: {
                  size: 12, // Adjust the font size of the y-axis labels
                },
              },
            },
          },
          layout: {
            // padding: 4, // Remove padding
          },
          responsive: true,
          maintainAspectRatio: false,
          // barPercentage: 1, // Set the width of each bar as a percentage of available space
           // Set the width of each category as a percentage of available space
        };
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Data',
                data: [325, 280, 375, 340, 390, 355],
                backgroundColor: ['#2292F4'],
                barPercentage: 0.8,
                categoryPercentage: 0.6,
              },
            ],
          },
          options: options,
        });
        return () => {
          chart.destroy();
        };
      }
    }
  }, []);

  // return <canvas ref={chartRef} style={{ maxWidth: '470px', maxHeight: '220px', width: '100%', height: '100%' }}/>;
  return <canvas ref={chartRef} className='doctorChart'/>;
  // return <canvas ref={chartRef} className='pb-12 w-full h-[70%]'/>;
};