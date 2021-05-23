let ctx2 = document.getElementById('myChart2').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4],
        datasets: [{
            data: [0, 200, 500, 1000],
            backgroundColor: ["rgb(218, 215, 254)"],
            borderColor: ["blue"],
            borderWidth: 1,
            radius: 0,
            // borderRadius:"c"
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


let ctx3 = document.getElementById('myChart3').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        datasets: [{
            labels: ["Rasless","Awake","Deep"],
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

// =================== chart circle ===================== 
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10],
            backgroundColor: [
                'rgb(255, 178, 0)',
                'rgb(255, 58, 41)',
                'rgb(67, 57, 242)',
            ],
            borderColor: [
                'rgb(255, 178, 0)',
                'rgb(255, 58, 41)',
                'rgb(67, 57, 242)',
            ],
            borderWidth: 1,
        },
            {
                backgroundColor: 'white',
                borderColor: ["white"],
                borderWidth: 3,
            },
            {
                data: [50],
                backgroundColor: "rgb(255, 58, 41)",
                borderColor: ["rgb(255, 58, 41)"],
                borderWidth: 1,
            },
            {
                backgroundColor: 'white',
                borderColor: ["white"],
                borderWidth: 3,
            },
            {
                data: [50],
                backgroundColor: "rgb(67, 57, 242)",
                borderColor: ["rgb(67, 57, 242)"],
                borderWidth: 0.1,
            },
            {
                data: [200],
                backgroundColor: 'white',
                borderColor: ["white"],
                borderWidth: 3,
                radius: 0,
            },

        ]
    },
    options: {
        legend: {
            display: false
        },
    }
});
// =================== chart barrrr =======================

let ctx1 = document.getElementById('myChart1').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: 'Restless',
                data: [75, 100, 65, 80, 90, 55, 110, 85, 50, 95, 45, 110],
                backgroundColor: "rgb(255, 179, 0)",
                borderColor: "rgb(255, 179, 0)",
                borderWidth: 2,
                borderRadius: 50,
                hoverBackgroundColor: "red",
                hoverBorderColor: "rgb(255, 179, 0)",
                borderSkipped: false,
            },
        ],
    },
    options: {
        plugins: {
            datalabels: {
            },
        },
        legend: {
            display: false,
            position: 'top',
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

// ==================== canvas fb, instagram, twitter ==================

let ctx4 = document.getElementById('myChart5').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: 'Twitter',
                data: [80, 60, 90, 200, 70, 200,200,230,200,240,130,270],
                backgroundColor: "blue",
                borderColor: "blue",
                borderWidth: 1,
                borderRadius: 5,
                hoverBackgroundColor: "blue",
                hoverBorderColor: "blue",
                borderSkipped: false,
            },
            {
                label: 'Facebook',
                data: [120, 90, 90, 100, 70, 130, 110, 150, 120, 155, 55, 160],
                backgroundColor: "green",
                borderColor: "green",
                borderWidth: 2,
                borderRadius: 5,
                hoverBackgroundColor: "green",
                hoverBorderColor: "green",
                borderSkipped: false,
            },
            {
                label: 'Instagram',
                data: [200, 150, 170, 60, 50, 80, 70, 85, 85, 85, 40, 120],
                backgroundColor: "rgb(255, 179, 0)",
                borderColor: "rgb(255, 179, 0)",
                borderWidth: 2,
                borderRadius: 5,
                hoverBackgroundColor: "rgb(255, 179, 0)",
                hoverBorderColor: "rgb(255, 179, 0)",
                borderSkipped: false,
            },
        ],
    },
    options: {
        tooltips: {
        },
       
        scales: {
            xAxes: [{
                stacked:true,
            }],
            yAxes: [{
                stacked:true,
            }]
        }
    }
});

// ========================================================
let ctx6 = document.getElementById('myChart6').getContext('2d');
let myChart6 = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: ["Twitter"],
        datasets: [
            {
                data: [67, 33],
                label: 'Twitter',
                // data: [45,100],
                backgroundColor: [
                    "#3ec556",
                    "rgb(226, 251, 215)"
                ],
                hoverBackgroundColor: [
                    "#3ec556",
                    "rgb(226, 251, 215)"
                ],
                borderWidth: [
                    0, 0
                ]
            },


        ],
    },
    options: {
        cutoutPercentage: 80,
        animation: {
            animationRotate: true,
            duration: 2000
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }

});


// =========================
let ctx7 = document.getElementById('myChart7').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart7 = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: ["Twitter"],
        datasets: [
            {
                data: [46, 54],
                label: 'Twitter',
                // data: [45,100],
                backgroundColor: [
                    "rgb(67, 57, 242)",
                    "rgb(215, 238, 251)"
                ],
                hoverBackgroundColor: [
                    "rgb(67, 57, 242)",
                    "rgb(218, 215, 254)"
                ],
                borderWidth: [
                    0, 0
                ]
            },


        ],
    },
    options: {
        cutoutPercentage: 80,
        animation: {
            animationRotate: true,
            duration: 2000
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }

});
// ==========================================
let ctx8 = document.getElementById('myChart8').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart8 = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: ["Twitter"],
        datasets: [
            {
                data: [15, 85],
                label: 'Twitter',
                // data: [45,100],
                backgroundColor: [
                    "red",
                    "rgb(251, 215, 221)"
                ],
                hoverBackgroundColor: [
                    "red",
                    "rgb(255, 229, 211)"
                ],
                borderWidth: [
                    0, 0
                ]
            },


        ],
    },
    options: {
        cutoutPercentage: 80,
        animation: {
            animationRotate: true,
            duration: 2000
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }

});
// ========================================
let ctx9 = document.getElementById('myChart9').getContext('2d');
Chart.defaults.scale.gridLines.display = false;
let myChart9 = new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: ["Twitter"],
        datasets: [
            {
                data: [67, 33],
                label: 'Twitter',
                // data: [45,100],
                backgroundColor: [
                    "rgb(2, 160, 252)",
                    "rgb(226, 251, 215)"
                ],
                hoverBackgroundColor: [
                    "rgb(2, 160, 252)",
                    "rgb(204, 248, 254)"
                ],
                borderWidth: [
                    0, 0
                ]
            },


        ],
    },
    options: {
        cutoutPercentage: 80,
        animation: {
            animationRotate: true,
            duration: 2000
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }

});




























