import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                // borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                // pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                // pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                // borderColor: ['rgba(11, 206, 86, 0.2)'],
                backgroundColor: ['rgba(11, 206, 86, 0.2)'],
                // pointBackgroundColor: ['rgba(11, 206, 86, 0.2)'],
                // pointBorderColor: ['rgba(11, 206, 86, 0.2)']
            }
        ]
    }

    return <Bar data={data} />
}

export default BarChart
