var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4],
        datasets: [{
            label: false,
            data: [0, 200, 500, 1000],
            backgroundColor: ["rgb(218, 215, 254)"],
            borderColor: ["blue"],
            borderWidth: 1,
            radius: 0,
        },
        ]
    },
    options: {
        plugins: {
            datalabels: {

            },
        },
        legend: {
            display: false
        },
        tooltips: {
        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true,

                }
            }],
            yAxes: [{
                ticks: {
                    display: false
                }
            }]

        }

    }
});





