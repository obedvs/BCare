import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function StatisticsChart2() {
  const data = {
    // labels: ['Red', 'Blue'],
    datasets: [{
        // label: '# of Votes',
        data: [81.9, 18.1],
        backgroundColor: [
          'rgba(52, 165, 171, 1)',
          'rgba(144, 236, 255, 1)',
        ]  
    }],
  }
  
  const options = {
    plugins:{
      leyend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    }
  }
  
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const { ctx, data } = chart;
      const lines = [`${data.datasets[0].data[1]}`,`MILLION PEOPLE`];
      const lineHeight = 20
  
      ctx.save();
      ctx.font = 'bolder 30px Inter, sans-serif';
      ctx.fillStyle = 'rgba(85, 44, 179, 1)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'
      lines.forEach((line, index) => {
        if (index == 1){
          ctx.font = 'bolder 10px Inter, sans-serif';
        }
        ctx.fillText(line, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + (lineHeight * index));
      });
    }
  }
  
  return (
    <div className='StatisticsChart2'> 
    {/* <h1 style={{padding: '20px', textAlign: 'center'}}>18.1 Million people</h1> */}
      <div style={{ maxWidth: '220px', maxHeight: '220px', width: '100%', height: '100%', margin: 'auto' }}>
        <Doughnut data={data} options={options} plugins={[textCenter]}/>
      </div>
    </div>
  ) ;
}