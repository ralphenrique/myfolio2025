import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart() {
    const data = {
        labels: [
          'web development',
          'UI/UX Design',
          'frontend development',
          'backend development',
          'blockchain',
          'natural language processing',
        ],
        datasets: [{
          label: 'Skills',
          data: [80, 75, 85, 75, 60, 75],
          fill: true,
          backgroundColor: 'rgba(219,69,55, 0.2)',
          borderColor: '#DB4537',
          pointBackgroundColor: '#DB4537',
          pointBorderColor: '#DB4537',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#ffffff'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                min: 40,
                max: 100,
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                pointLabels: {
                    color: '#ffffff',
                    font: {
                        size: 15,
                        weight: 500,
                        family: 'Clash Grotesk'
                    },
                    padding: 20
                },
                ticks: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <Radar data={data} options={options} />
        </div>
    );
}