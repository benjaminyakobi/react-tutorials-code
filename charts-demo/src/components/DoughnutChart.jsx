import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                // borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: [
                    'rgba(255, 99, 86, 0.8)',
                    'rgba(255, 11, 86, 0.8)',
                    'rgba(54, 162, 86, 0.8)',
                    'rgba(255, 152, 86, 0.8)',
                    'rgba(135, 231, 86, 0.8)'
                ],
                // pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                // pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                // borderColor: ['rgba(11, 206, 86, 0.2)'],
                backgroundColor: [
                    'rgba(255, 99, 86, 0.8)',
                    'rgba(255, 11, 86, 0.8)',
                    'rgba(54, 162, 86, 0.8)',
                    'rgba(255, 152, 86, 0.8)',
                    'rgba(135, 231, 86, 0.8)'
                ],
                // pointBackgroundColor: ['rgba(11, 206, 86, 0.2)'],
                // pointBorderColor: ['rgba(11, 206, 86, 0.2)']
            }
        ]
    }

    return <Doughnut data={data} />
}

export default DoughnutChart
