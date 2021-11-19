import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['ReactJS', 'Typescript', 'Javascript', 'Html', 'Sass'],
  datasets: [
    {
      data: [70, 70, 90, 100, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const options: any = {
  indexAxis: 'y',
  transitions: {
    show: {
      animations: {
        x: {
          from: 0
        },
        y: {
          from: 0
        }
      }
    },
    hide: {
      animations: {
        x: {
          to: 0
        },
        y: {
          to: 0
        }
      }
    }
  },
  elements: {
    bar: {
      borderWidth: 0,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

export default function MySkill() {
  return (
    <div className='about myskill'>
      <h1>My Skill</h1>
      <div className='myskill-charts'>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
