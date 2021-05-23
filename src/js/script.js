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
// ======================= chart line diagrms ====================


var ctx = document.getElementById('myChart2').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        datasets: [{
            label: false,
            data: [200, 400, 250,100,500,250, 250,250],
            backgroundColor: 'transparent',
            borderColor: ["rgb(67, 57, 242)"],
            borderWidth: 3,
            radius: 0,
            lineTension: 0,
            fill: false
        },
        {
            label: false,
            data: [250,350,450,550, 425,300, 550,550],
            backgroundColor: 'transparent',
            borderColor: ["rgb(255, 58, 41)"],
            borderWidth: 3,
            radius:0,
            lineTension: 0,
            fill: false

        },
       
        {
            label: false,
            data: [0, 100, -200, 200,450,450,450,450],
            backgroundColor: 'transparent',
            borderColor: ["rgb(255, 178, 0)"],
            borderWidth: 3,
            lineTension: 0,
            radius: 0,
            fill: false

        },
         {
            label: false,
            data: [50, -250,-25,200,-250,200,100,250],
            backgroundColor: 'transparent',
            borderColor: ["rgb(52, 181, 58)"],
            borderWidth: 3,
            lineTension: 0,
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
            xAxes: [
                {
                    ticks: {
                        // display: false,
                        beginAtZero: true,

                    }
                }],
            yAxes: [{
                ticks: {
                    display: false,
                    min: -300,
                    max: 600,
                }
            }]

        }

    }
});










